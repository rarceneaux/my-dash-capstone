import React from 'react';
import { Link } from 'react-router-dom';
// import FontAwesome from 'react-fontawesome';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { userObj } = this.props;
    return (
      <div className="Profile">
        <div className="card profile-all">
        <div className="what">
  <h5 className="card-title ray">Welcome, { userObj.displayName} to your My-Dash Journal!</h5>
  <img src={userObj.photoURL} className="rounded-circle pic" alt="..."/>
  <div className="card-body">
    <p>You Last Login: {userObj.metadata.lastSignInTime}</p>
  <Link className="btn btn-secondary create" to={'/event/new'}>Add to Your Dash</Link>
  <Link className="btn btn-secondary view" to={'/event'}>View Your Dash</Link>
  </div>
</div>
  </div>
  </div>
    );
  }
}

export default Profile;
