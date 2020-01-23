import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { userObj } = this.props;
    // console.log(this.props.userObj);
    return (
      <div className="Profile">
        <div className="card"></div>
        <div className="card-body">
  <img src={userObj.photoURL} className="rounded-circle" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">Welcome, { userObj.displayName} to your My-Dash Journal!</h5>
    <p>You Last Login: {userObj.metadata.lastSignInTime}</p>
  <Link className="btn btn-primary create" to={'/event/new'}>Create Event</Link>
  <Link className="btn btn-success view" to={'/event'}>View Events</Link>
  </div>
</div>
  </div>
    );
  }
}

export default Profile;
