import React, { Component } from 'react'
import axios from 'axios'
import { Button, Label, Grid, Col, Row } from 'react-bootstrap';
// import PeopleDetail from './PeopleDetail'
import Highlight from './Highlight'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getAllPeople, clearPeople} from '../stores/people/action'
import {getAllStarships, clearStarships} from '../stores/starships/action'

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
    let self = this
    for ( let i = 1; i <= 10; i++) {
      const endPoint = `https://swapi.co/api/starships/${i}`
      axios.get(endPoint)
        .then(function (response) {
          self.props.getAllStarships(response.data)
        })
        .catch(function (err) {
          console.log(err)
        }) 
    }
  }

  fetchStarWarsChars (num) {
    this.props.clearPeople()
    let self = this
    let start = num * 5 - 4
    let end = num * 5
    for ( let i = start; i <= end; i++) {
      const endPoint = `https://swapi.co/api/people/${i}`
      axios.get(endPoint)
        .then(function (response) {
          self.props.getAllPeople(response.data)
        })
        .catch(function (err) {
          console.log(err)
        }) 
    }
  }

  componentDidMount () {

    this.fetchStarWarsChars(1)
    this.fetchStarWarsStarShips()
  }

  render () {
    let people = this.props.characters.map(c =>
      <div key={c.name}>
        <h2><Label>{c.name}</Label></h2>
        <Link to={`/detail/people/${c.url.split('/')[5]}`}>
        <Button bsStyle="primary">Detail</Button>
        </Link>
      </div>
    )

    let highlight = this.props.starships.map(ship =>
      <Highlight ship={ship} key={ship.name} />
    )

    let buttons = []
    
    for (let i = 1; i <= 7; i++) {
      buttons.push(<Button onClick={ () => this.fetchStarWarsChars(i) }>{i}</Button>)
    }
    
    return (
      <div className="margin">
        <Grid>
          <Button bsStyle="warning" onClick={this.logout.bind(this)} style={{margin: '10px'}}>logout</Button>
          <Row className="show-grid">
            <Col md={9}>
              <h1>Starship highlight</h1>
              {highlight}
            </Col>
            <Col md={3}>
              <h2>Characters</h2>
              {people}
              <br />
              
              {buttons}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({
    characters: state.people,
    starships: state.starships
  })

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllPeople,
  clearPeople,
  getAllStarships,
  clearStarships
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Home)