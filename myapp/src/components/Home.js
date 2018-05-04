import React, { Component } from 'react'
import { Button, Grid, Col, Row, Alert, strong } from 'react-bootstrap';
import Highlight from './Highlight'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getAllPeople, clearPeople} from '../stores/people/action'
import {getAllStarships, clearStarships} from '../stores/starships/action'
import NewPeopleForm from './NewPeopleForm'
import CharContainer from './CharContainer'
import './loader.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  logout () {
    localStorage.clear()
    console.log(this.props)
    this.props.props.history.push('/login')
  }

  fetchStarWarsStarShips () {
    this.props.clearStarships()
    this.props.getAllStarships()
  }

  fetchStarWarsChars (num) {
    this.props.clearPeople()
    this.props.getAllPeople(num)
  }

  componentDidMount () {

    this.fetchStarWarsChars(1)
    this.fetchStarWarsStarShips()
  }

  render () {
    let people = null
    let highlight = null
    
    if (this.props.charError) {
      people = <Alert bsStyle="danger">Something went wrong : <strong>{this.props.charErrorMsg}</strong></Alert>
    } else {
      people = this.props.characters.map(c =>
        <CharContainer key={c.name} c={c} />
      )
    }

    if (this.props.shipError) {
      highlight = <Alert bsStyle="danger">Something went wrong : <strong>{this.props.shipErrorMsg}</strong></Alert>
    } else {
      highlight = this.props.starships.map(ship =>
        <Highlight ship={ship} key={ship.name} />
      )
    }

    let buttons = []
    
    for (let i = 1; i <= 7; i++) {
      buttons.push(<Button onClick={ () => this.fetchStarWarsChars(i) } key={i}>{i}</Button>)
    }
    
    return (
      <div className="margin">
        <Grid>
          <Button bsStyle="warning" onClick={this.logout.bind(this)} style={{margin: '10px'}}>logout</Button>
          <Row className="show-grid">
            <Col md={9}>
              <h1 className="text-pop-up-right">Starship highlight</h1>
              {
                this.props.shipLoading ? <div className="loader"></div> : highlight
              }  
            </Col>
            <Col md={3}>
              <h2 className="text-pop-up-left">Characters</h2>
              {
                this.props.charLoading ? <div className="loader"></div> : people
              }  
              <br />
              {buttons}
              <br />
              <NewPeopleForm />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({
    characters: state.people.data,
    charLoading: state.people.loading,
    charError: state.people.error.status,
    charErrorMsg: state.people.error.message,

    starships: state.starships.data,
    shipLoading: state.starships.loading,
    shipError: state.starships.error.status,
    shipErrorMsg: state.starships.error.message
  })

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllPeople,
  clearPeople,
  getAllStarships,
  clearStarships
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Home)