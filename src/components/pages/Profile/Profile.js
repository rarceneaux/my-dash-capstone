import React from 'react';
import { Link } from 'react-router-dom';
// import FontAwesome from 'react-fontawesome';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { userObj } = this.props;
    return (
      <div className="me">
        <div className="profile-all">
        <div className="what">
  <h2 className="card-title ray">Welcome, { userObj.displayName} to your My-Dash Journal!</h2>
  <img src={userObj.photoURL} className="rounded-circle pic" alt="..."/>
  <div className="card-body">
    <p className="login-time">You Last Login: {userObj.metadata.lastSignInTime}</p>
  <Link className="btn btn-dark create" to={'/event/new'}>Add-Dash</Link>
  <Link className="btn btn-dark view" to={'/event'}>View-Dash</Link>
  <Link className="btn btn-dark view" to={'/friends'}>Friends</Link>
  <div className="fb-comments" data-href="https://my-dash-93e26.firebaseapp.com/" data-width="500" data-numposts="100"></div>
  </div>
</div>
  </div>
  </div>
    );
  }
}

export default Profile;
