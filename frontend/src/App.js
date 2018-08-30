import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignupFormContainer from './components/session_form/signup_form_container.js';
import LoginFormContainer from './components/session_form/login_form_container.jsx';
import NavBarContainer from './components/navBar/navBarContainer.js';
import BartMap from './components/map.jsx';
import { ProtectedRoute, AuthRoute } from './util/route_util';

const App = () => {
  return (
    <div>
      <NavBarContainer/>

      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer}></AuthRoute>
        <AuthRoute exact path="/login" component={LoginFormContainer}></AuthRoute>
        <AuthRoute exact path="/splash" component={NavBarContainer}></AuthRoute>
        <Route path = "/" component={BartMap} />
      </Switch>
    </div>
  );
}

export default App;
