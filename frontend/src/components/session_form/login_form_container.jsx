import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { loginUser } from '../../util/session_api_util';
=======
import { loginUser,clearError } from '../../util/session_api_util';
>>>>>>> 4cc1f9044f973242f69aa59221b2b806c8e7edf8
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    // errors: errors.session,
    formType: 'Login',
=======
    errors: state.error,
    formType: 'login',
>>>>>>> 4cc1f9044f973242f69aa59221b2b806c8e7edf8
    navLink: <Link to="/signup">sign up instead</Link>,
    buttonText: 'Log in'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(loginUser(user)),
<<<<<<< HEAD
=======
    clearErrors: () => dispatch(clearError())
>>>>>>> 4cc1f9044f973242f69aa59221b2b806c8e7edf8
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
