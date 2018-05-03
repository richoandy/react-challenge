import React, { Component } from 'react'
import axios from 'axios'

class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      opening_crawl: '',
      director: ''
    }
  }

  fetchFilmDetail (id) {
    let self = this
    axios.get(`https://swapi.co/api/films/${id}`)
      .then(function (response) {
        console.log(response)
        self.setState({
          title: response.data.title,
          opening_crawl: response.data.opening_crawl,
          director: response.data.director
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  componentDidMount () {
    this.fetchFilmDetail(this.props.match.params.filmId)
  }
  componentWillReceiveProps(nextProps) {
    this.fetchFilmDetail(nextProps.match.params.filmId)
  }

  render () {
    return (
      <div>
        <h4>title: {this.state.title} </h4>
        <h4>opening crawl: {this.state.opening_crawl} </h4>
        <h4>director: {this.state.director}</h4>
      </div>
    )
  }
}

export default componentName