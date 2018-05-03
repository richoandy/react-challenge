import React, { Component } from 'react'
import axios from 'axios'
import { Button, Label, Grid, Col, Row } from 'react-bootstrap';
// import PeopleDetail from './PeopleDetail'
import Highlight from './Highlight'
import { Link, withRouter, BrowserRouter as Router } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      starships: []
    }
  }

  logout () {
    localStorage.clear()
    console.log(this.props)
    this.props.props.history.push('/login')
  }

  fetchStarWarsStarShips () {
    let self = this
    for ( let i = 1; i <= 10; i++) {
      const endPoint = `https://swapi.co/api/starships/${i}`
      axios.get(endPoint)
        .then(function (response) {
          let temp = [...self.state.starships, response.data]
          self.setState({
            starships: temp
          })
        })
        .catch(function (err) {
          console.log(err)
        }) 
    }
  }

  fetchStarWarsChars () {
    let self = this
    for ( let i = 1; i <= 5; i++) {
      const endPoint = `https://swapi.co/api/people/${i}`
      axios.get(endPoint)
        .then(function (response) {
          let temp = [...self.state.characters, response.data]
          self.setState({
            characters: temp
          })
        })
        .catch(function (err) {
          console.log(err)
        }) 
    }
  }

  componentDidMount () {
    this.fetchStarWarsChars()
    this.fetchStarWarsStarShips()
  }

  render () {
    let people = this.state.characters.map(c =>
      <div key={c.name}>
        <h2><Label>{c.name}</Label></h2>
        <Link to={`/detail/${c.url.substr(c.url.length-2, 1)}`}>
        <Button bsStyle="primary">Detail</Button>
        </Link>
        
      </div>
    )

    let highlight = this.state.starships.map(c =>
      <Highlight c={c} key={c.name} />
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
              <h2>top 5 Characters</h2>
              {people}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home