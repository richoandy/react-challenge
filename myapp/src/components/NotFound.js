import React, { Component } from 'react'
import { Jumbotron, Grid, Col, Row, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

class NotFound extends Component {
  render () {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <Row className="show-grid"> 
              <Col xs={8} xsOffset={3}>
                <h1>404 NOT FOUND</h1>
                <Link to="/">
                  <Button bsStyle="primary">Back to Home </Button>
                </Link>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    )
  }
}

export default NotFound