import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Button, Label  } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFavorite } from '../stores/favorites/action'

class charContainer extends Component {

  addFavorite = (name) => {
    if (this.props.favorite.indexOf(name) === -1) {
      this.props.addFavorite(name)
    }
  } 

  render () {
    return (
      <div>
        <h2><Label>{this.props.c.name}</Label></h2>
        <Link to={`/detail/people/${this.props.c.url.split('/')[5]}`}><Button bsStyle="primary">Detail</Button>
        </Link>
        <a onClick={() => this.addFavorite(this.props.c.name)} title="Love it" className="btn" data-count="0"><span>&#x2764;</span></a>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addFavorite
}, dispatch)

const mapStateToProps = (state) => ({
  favorite: state.favorite
})

export default connect(mapStateToProps, mapDispatchToProps) (charContainer)