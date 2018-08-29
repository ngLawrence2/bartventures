import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupFormContainer from './components/session_form/signup_form_container.js';
import LoginFormContainer from './components/session_form/login_form_container.jsx';
import { Link } from 'react-router-dom';
import GreetingContainer from './components/greeting_container/greeting_container.js';
import { ProtectedRoute, AuthRoute } from './util/route_util';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
        <ProtectedRoute path="/" component={GreetingContainer} />
        <p>
          <AuthRoute exact path="/signup" component={SignupFormContainer}></AuthRoute>
          <AuthRoute exact path="/login" component={LoginFormContainer}></AuthRoute>


        </p>

       </div>
    );
  }
}

export default App;
