import React, { Component } from 'react'
import { Jumbotron, Grid, Col, Row, Button, Alert} from 'react-bootstrap';
import { Link } from "react-router-dom";

class NotFound extends Component {
  render () {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <Row className="show-grid"> 
              <Col xs={6} xsOffset={3}>
              <Alert bsStyle="danger">
                404 NOT FOUND
              </Alert>;
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