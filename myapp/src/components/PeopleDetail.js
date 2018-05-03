import React, { Component } from 'react'
import axios from 'axios'
import {Button,  Grid, Col, Row} from 'react-bootstrap'
import FilmDetail from './FilmDetail'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class PeopleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      height: '',
      mass: '',
      gender: '',
      films: [],
      filmTitles: []
    }
  }

  fetchPeople () {
    let self = this
    axios.get(`https://swapi.co/api/people/${this.props.match.params.url}`)
    .then(function (response) {
      self.setState({
        name: response.data.name,
        height: response.data.height,
        mass: response.data.mass,
        gender: response.data.gender,
        films: response.data.films
      })
      self.state.films.forEach(film => {
        self.fetchFilms(film)
      })
    })  
    .catch(function (err) {
      console.log(err)
    })
  }

  fetchFilms (url) {
    let self = this
    axios.get(url)
      .then(function (response) {
        let newTitle = {
          title: response.data.title,
          opening_crawl: response.data.opening_crawl,
          director: response.data.director,
          url: response.data.url
        }
        let newList = [...self.state.filmTitles, newTitle]
        self.setState({
          filmTitles: newList
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  componentDidMount () {
    this.fetchPeople()
    this.fetchFilms()
  }

  render () {
    let filmList = this.state.filmTitles.map(film => 
      <Link to={`/detail/${this.props.match.params.url}/film/${film.url.split('/')[5]}`} key={film.title}>
      <li film={film}>{film.title}</li>
      </Link>
    )
    return (
        <div className="container">
        <Link to="/">
          <Button bsStyle="primary" style={{margin: '10px'}}>Back to Home </Button>
        </Link>
          <Grid>
            <Row className="show-grid">
              <Col md={6}>
                <h1>{this.state.name}</h1>
                <div>height: {this.state.height} cm</div>
                <div>mass: {this.state.mass} kg</div>
                <div>gender: {this.state.gender} </div>
                <h4>list of films</h4>
                <ul>
                  {filmList}
                </ul>
              </Col>
              <Col md={6}>
                Film Detail
                <Switch>
                  <Route path={`/detail/${this.props.match.params.url}/film/:filmId`} component={FilmDetail}/>
                </Switch>
              </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}

export default PeopleDetail