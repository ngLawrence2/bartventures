import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/test.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayCorrectSessionButton=this.displayCorrectSessionButton.bind(this);
  }

  displayCorrectSessionButton() {
    if(this.props.currentUser===undefined) {
      return (
        <div className="sessionLinks">
          <Link to = "/login">Log in!</Link>
          <Link to = "/signup">Sign Up!</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className='current-user' >Hello {this.props.currentUser}</h1>
            <button className='logout-button' onClick= {this.props.logoutUser}>Log out</button>
        </div>
      );
    }
  }


  render() {
    const displayLinks = this.displayCorrectSessionButton();
    return (
      <div>
        <h1 className='header'>Bart Ventures</h1>
        {displayLinks}

      </div>
    );
  }
}

export default NavBar;
