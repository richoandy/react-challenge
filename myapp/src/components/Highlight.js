import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap'

class Highlight extends Component {
  render () {
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.c.name}</h1>
          <h2>Class: {this.props.c.starship_class}</h2>
          <h5>Manufacturer: {this.props.c.manufacturer} cm</h5>
          <h6>model: {this.props.c.model}</h6>
        </Jumbotron>
      </div>
    )
  }
}

export default Highlight