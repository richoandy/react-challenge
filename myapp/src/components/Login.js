import React, { Component } from 'react'
import {Grid, Col, Row, FormGroup, FormControl} from 'react-bootstrap'

class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: '',
        password: ''
      }
    }

    verifyLogin = (e) => {
      e.preventDefault()

      if (this.state.username === 'admin' && this.state.password === 'admin') {
        localStorage.setItem('token', 'admin')
        alert('login succeed')
        this.props.history.push('/')
      } else {
        alert('login failed')
      }
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={4} mdOffset={4}>
            <h1>Login Page</h1>
            <form onSubmit ={this.verifyLogin}>
              <FormGroup bsSize="large">
                <FormControl type="text" placeholder="Username: admin" name="username" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup bsSize="large">
                <FormControl type="password" placeholder="Password: admin" name="password" onChange={this.handleChange} />
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

export default Login