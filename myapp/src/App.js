import React, { Component } from 'react';
import logo from './logo.svg';
import starwars from './starwars.png'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import PeopleDetail from './components/PeopleDetail'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <img src={starwars} className="App-logo" alt="logo" />
              <h1 className="App-title">Star Wars & React Initiative</h1>
            </header>
          </div>
          <Switch>
            <Route exact path="/" render={
              (props => {
                if (localStorage.token) {
                  return <Home props={props} />
                } else {
                  return <Redirect to="/login"/>
                }
              })
            } />
            <Route path="/login" component={Login} />
            <Route path="/detail/:type/:url" component={PeopleDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>   
      </Router>


    );
  }
}

export default App;