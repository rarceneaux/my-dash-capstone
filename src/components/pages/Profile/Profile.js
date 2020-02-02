import React from 'react';
import { Link } from 'react-router-dom';
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
  <Link className="btn btn-dark create" to={'/event/new'}>Add-Dash</Link>
  <Link className="btn btn-dark view" to={'/event'}>View-Dash</Link>
  <Link className="btn btn-dark " to={'/comments'}>Facebook</Link>
    <h3 className="login-time">You Last Login: {userObj.metadata.lastSignInTime}</h3>
  </div>
</div>
  </div>
  </div>
    );
  }
}

export default Profile;
