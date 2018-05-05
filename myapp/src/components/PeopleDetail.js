import React, { Component } from 'react'
import axios from 'axios'
import {Button,  Grid, Col, Row} from 'react-bootstrap'
import FilmDetail from './FilmDetail'
import Info from './Info'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFilm } from '../stores/filmDetail/action'
import { getDetail } from '../stores/details/action'
import { addFavorite } from '../stores/favorites/action'

class PeopleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      height: '',
      mass: '',
      gender: '',
      model: '',
      manufacturer: '',
      length: '',
      films: [],
      filmTitles: []
    }
  }

  fetchPeople (type) {
    this.props.getDetail(type, this.props.match.params.url)
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
    console.log('component did mount')
    this.fetchPeople(this.props.match.params.type)
    this.fetchFilms()
  }

  changeFilm = (id) => {
    this.props.getFilm(id)
  }

  addFavorite = (name) => {
    if (this.props.favorite.indexOf(name) === -1) {
      this.props.addFavorite(name)
    }
  }

  render () {
    let filmList = this.props.filmTitles.map(film => 
      <Link onClick={() => this.changeFilm(film.url.split('/')[5])} to={`/detail/${this.props.match.params.type}/${this.props.match.params.url}/film/${film.url.split('/')[5]}`} key={film.title}>
      <li film={film}>{film.title}</li>
      </Link>
    )
    
    let info = (this.props.match.params.type === 'people') ? <Info type={this.props.match.params.type} height={this.props.detail.height} mass={this.props.detail.mass} gender={this.props.detail.gender}/> : <Info type={this.props.match.params.type} model={this.props.detail.model} manufacturer={this.props.detail.manufacturer} length={this.props.detail.length}/>

    return (
        <div className="container">
        <Link to="/">
          <Button bsStyle="primary" style={{margin: '10px'}}>Back to Home </Button>
        </Link>
          <Grid>
            <Row className="show-grid">
              <Col md={6}>

              {(this.props.match.params.type === 'people') ? <a onClick={() => this.addFavorite(this.props.detail.name)} title="Love it" className="btn" data-count="0"><span>&#x2764;</span></a> : <div></div> }
              <h1>{this.props.detail.name}</h1>
                {info}
                <h4>list of films</h4>
                <ul>
                  {filmList}
                </ul>
              </Col>
              <Col md={6}>
                Film Detail 
                <Switch>
                  <Route path={`/detail/${this.props.match.params.type}/${this.props.match.params.url}/film/:filmId`} component={FilmDetail}/>
                </Switch>
              </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  detail: state.detail.data,
  filmTitles: state.detail.filmTitles,
  favorite: state.favorite
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getFilm,
  getDetail,
  addFavorite
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (PeopleDetail)
