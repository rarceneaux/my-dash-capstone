import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


import './Auth.scss';

class Auth extends React.Component {
    loginClickEvent = (e) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }

    render() {
      return (
      <div className="Auth">
        {/* <div className="d-flex justify-content-center mt-r test"> */}
        <button className="btn btn-dark-a" onClick={this.loginClickEvent}><h1 className="whatever">Login</h1></button>
      </div>
      // </div>
      );
    }
}

export default Auth;
