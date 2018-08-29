import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupFormContainer from './components/session_form/signup_form_container.js';
import BartMap from './components/map';

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
        <SignupFormContainer />
        <BartMap />
      </div>
    );
  }
}

export default App;

