import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFilm } from '../stores/filmDetail/action'

class FilmDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      opening_crawl: '',
      director: ''
    }
  }

  // fetchFilmDetail (id) {
  //   // let self = this
  //   // axios.get(`https://swapi.co/api/films/${id}`)
  //   //   .then(function (response) {
  //   //     console.log(response)
  //   //     self.setState({
  //   //       title: response.data.title,
  //   //       opening_crawl: response.data.opening_crawl,
  //   //       director: response.data.director
  //   //     })
  //   //   })
  //   //   .catch(function (err) {
  //   //     console.log(err)
  //   //   })
  //   this.props.getFilm(id)
  // }

  // componentDidMount () {
  //   this.fetchFilmDetail(this.props.match.params.filmId)
  // }
  // componentWillReceiveProps(nextProps) {
  //   this.fetchFilmDetail(nextProps.match.params.filmId)
  // }

  render () {
    return (
      <div>
        <h4>title: {this.props.film.title} </h4>
        <h4>opening crawl:<br /> {this.props.film.opening_crawl} </h4>
        <h4>director: {this.props.film.director}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  film: state.film.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getFilm
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (FilmDetail)