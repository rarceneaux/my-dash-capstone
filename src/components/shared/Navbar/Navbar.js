/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Navbar.scss';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

logMeOut = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
}

render() {
  const { authed, userObj } = this.props;
  const buildNavbar = () => {
    if (authed) {
      return (
    <ul className="navbar-nav ml-auto">
    <li className="nav-item"><span><Link className="nav-link" to="/"><img src={userObj.photoURL} className="icon rounded-circle" alt="..."/> {userObj.displayName}</Link></span></li>
    <li className="nav-item"><Link className="nav-link" to="/event">Dash</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/event/new">Add Dash</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/comments">Facebook</Link></li>
    <li className="nav-item"><p className="nav-link" onClick={this.logMeOut}>Logout</p></li>
   </ul>
      );
    }

    return (<ul className="navbar-nav ml-auto"></ul>);
  };

  return (
  <div className="navBar">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark change">
      <Link className="navbar-brand" to="/">My-Dash</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      { buildNavbar() }
      </div>
    </nav>
  </div>
  );
}
}

export default NavBar;
