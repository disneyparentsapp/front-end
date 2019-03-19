import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';
import Loggedin from './Loggedin'
import authenticate from './Authenticate'
import Register from './Register'
import Login from './Login'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
      
      
      <Switch><Route exact path="/" component={Register} exact/></Switch>
      <Switch><Route exact path="/login" component={Login} exact/></Switch>
      <Route exact path="/home" component={Loggedin} exact/>
      </div>
      
    );
  }
}

export default App
