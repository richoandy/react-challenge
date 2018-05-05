import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFavorite } from '../stores/favorites/action'
import { bindActionCreators } from 'redux'

class favorite extends Component {
  deleteFavorite = (index) => {
    let tempFavorite = [...this.props.favorite]
    tempFavorite.splice(index, 1)
    this.props.deleteFavorite(tempFavorite)
  }

  render () {
    const favorites = this.props.favorite.map((fav, index) => <li key={index}>{fav} <button onClick={ () => this.deleteFavorite(index) }>delete</button></li> )
    
    if (this.props.favorite.length !== 0) {
      return (
        <div>
          <h1>favorite characters</h1>
          <ul>
            {favorites}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h1>favorite characters</h1>
          still empty.. go love someone
      </div>
      )
    }

  }
}

const mapStateToProps = (state) => ({
  favorite: state.favorite
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteFavorite
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (favorite)