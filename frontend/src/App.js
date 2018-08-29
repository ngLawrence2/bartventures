import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignupFormContainer from './components/session_form/signup_form_container.js';
import LoginFormContainer from './components/session_form/login_form_container.jsx';
import NavBarContainer from './components/navBar/navBarContainer.js';

const App = () => {
  return (
    <div>
      <NavBarContainer/>
      <Switch>
        <Route path = "/signup" component = {SignupFormContainer}/>
        <Route path = "/login" component= {LoginFormContainer} />

      </Switch>
    </div>
  );
}

export default App;
