import React, { Component } from 'react';

import './App.css';
import Loggedin from './Loggedin'
import authenticate from './Authenticate'
import Register from './Register'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>SIGN IN</h1>
      <Switch><Route path="/" component={Register} exact/></Switch>
      </div>
    );
  }
}

export default App
