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
      <div className="Auth my-5">
        <div className="d-flex justify-content-center mt-r test">
        <button className="btn btn-dark" onClick={this.loginClickEvent}><span>Login</span></button>
      </div>
      </div>
      );
    }
}

export default Auth;
