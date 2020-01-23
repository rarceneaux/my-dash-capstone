import React from 'react';
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
  <h5 className="card-title">Welcome, { userObj.displayName} to your My-Dash Profile!</h5>
    <p>You Last Login:{userObj.metadata.lastSignInTime}</p>
  </div>
</div>
  </div>
    );
  }
}

export default Profile;
