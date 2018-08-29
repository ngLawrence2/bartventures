// frontend/src/components/session_form/signup_form_container.js

import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser, clearError } from '../../util/session_api_util';
import SessionForm from './session_form';

const mapStateToProps = (state) => {

  return {
<<<<<<< HEAD
    // errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
=======
    errors : state.error,
    formType: 'signup',
    navLink : <Link to ='/login'>Log in instead</Link>,
    buttonText: 'Sign Up'
>>>>>>> 4cc1f9044f973242f69aa59221b2b806c8e7edf8
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(registerUser(user)),
    clearErrors: () => dispatch(clearError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
