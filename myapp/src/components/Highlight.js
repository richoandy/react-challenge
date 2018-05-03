import React, { Component } from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Highlight extends Component {
  render () {
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.ship.name}</h1>
          <h2>Class: {this.props.ship.starship_class}</h2>
          <h5>Manufacturer: {this.props.ship.manufacturer} cm</h5>
          <h6>model: {this.props.ship.model}</h6>
          <Link to={`/detail/starships/${this.props.ship.url.split('/')[5]}`}>
            <Button bsStyle="primary">Detail</Button>
          </Link>
          
        </Jumbotron>
      </div>
    )
  }
}

export default Highlight