import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Button, Label  } from 'react-bootstrap'

class charContainer extends Component {
  render () {
    return (
      <div>
        <h2><Label>{this.props.c.name}</Label></h2>
        <Link to={`/detail/people/${this.props.c.url.split('/')[5]}`}><Button bsStyle="primary">Detail</Button>
        </Link>
      </div>
    )
  }
}

export default charContainer