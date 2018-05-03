import React, { Component } from 'react'
import axios from 'axios'
import { Button, Label, Grid, Col, Row } from 'react-bootstrap';
// import PeopleDetail from './PeopleDetail'
import Highlight from './Highlight'
import { Link, withRouter, BrowserRouter as Router } from "react-router-dom";
import store from '../stores'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: store.getState().people,
      starships: store.getState().starships
    }

    store.subscribe( () => {
      this.setState({
        characters: store.getState().people,
        starships: store.getState().starships
      })
    })
  }

  logout () {
    localStorage.clear()
    console.log(this.props)
    this.props.props.history.push('/login')
  }

  fetchStarWarsStarShips () {
    store.dispatch({
      type: 'CLEAR_STARSHIPS_LIST'
    })
    let self = this
    for ( let i = 1; i <= 10; i++) {
      const endPoint = `https://swapi.co/api/starships/${i}`
      axios.get(endPoint)
        .then(function (response) {
          // let temp = [...self.state.starships, response.data]
          // self.setState({
          //   starships: temp
          // })
          store.dispatch({
            type: 'GET_ALL_STARSHIPS',
            payload: response.data
          })
        })
        .catch(function (err) {
          console.log(err)
        }) 
    }
  }

  fetchStarWarsChars (num) {
    store.dispatch({
      type: 'CLEAR_PEOPLE_LIST'
    })
    let self = this
    let start = num * 5 - 4
    let end = num * 5
    for ( let i = start; i <= end; i++) {
      const endPoint = `https://swapi.co/api/people/${i}`
      axios.get(endPoint)
        .then(function (response) {
          // let temp = [...self.state.characters, response.data]
          // self.setState({
          //   characters: temp
          // })
          console.log(response.data)
          store.dispatch({
            type: 'GET_ALL_PEOPLE',
            payload: response.data
          })
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
    let people = this.state.characters.map(c =>
      <div key={c.name}>
        <h2><Label>{c.name}</Label></h2>
        <Link to={`/detail/people/${c.url.split('/')[5]}`}>
        <Button bsStyle="primary">Detail</Button>
        </Link>
      </div>
    )

    let highlight = this.state.starships.map(ship =>
      <Highlight ship={ship} key={ship.name} />
    )
    
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
              <Button onClick={ () => this.fetchStarWarsChars(1) }>1</Button>
              <Button onClick={ () => this.fetchStarWarsChars(2) }>2</Button>
              <Button onClick={ () => this.fetchStarWarsChars(3) }>3</Button>
              <Button onClick={ () => this.fetchStarWarsChars(4) }>4</Button>
              <Button onClick={ () => this.fetchStarWarsChars(5) }>5</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home