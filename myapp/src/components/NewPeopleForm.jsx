import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewPeople } from '../stores/people/action'
import {Grid, Col, Row, FormGroup, FormControl} from 'react-bootstrap'

class newPeopleForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      name: '',
      height: '',
      mass: '',
      gender: '',
      url: 'https://swapi.co/api/people/100/'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNewPeople = (e) => {
    e.preventDefault()
    const newPeople = this.state
    this.props.addNewPeople(newPeople)
  }

  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={3}>
            <h1>Add New Characters</h1>
            <form onSubmit ={this.addNewPeople}>
              <FormGroup bsSize="large">
                <FormControl type="text" placeholder="new name" name="name" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup bsSize="large">
                <FormControl type="text" placeholder="new height" name="height" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup bsSize="large">
                <FormControl type="text" placeholder="new mass" name="mass" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup bsSize="large">
                <FormControl type="text" placeholder="new gender" name="gender" onChange={this.handleChange} />
              </FormGroup>
              <input type="submit" value="Submit" />
            </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addNewPeople
}, dispatch)

export default connect(null, mapDispatchToProps) (newPeopleForm)