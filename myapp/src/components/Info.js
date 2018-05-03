import React, { Component } from 'react'

class Info extends Component {
  render () {
    if (this.props.type === 'people') {
      return (
        <div>
          <div>height: {this.props.height} cm </div>
          <div>mass: {this.props.mass} kg</div>
          <div>gender: {this.props.gender}</div>
        </div>
      )
    } else {
      return (
        <div>
          <div>model: {this.props.model} </div>
          <div>manufacturer: {this.props.manufacturer} </div>
          <div>length: {this.props.length} m </div>
        </div>
      )
    }

  }
}

export default Info