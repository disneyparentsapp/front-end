import React, { Component } from 'react';

import './App.css';
import Loggedin from './Loggedin'
import authenticate from './Authenticate'
import Login from './Login'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route path="/home" render={() => <Loggedin/>} /> */}
        <Loggedin />
      </div>
    );
  }
}

export default authenticate(App)(Login);
