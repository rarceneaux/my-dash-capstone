import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';

class Profile extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line func-names
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 3584356521639073,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.0',
      });
    };

    // Load the SDK asynchronously
    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      // eslint-disable-next-line prefer-const
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    window.FB.XFBML.parse();
  }

  // componentDidUpdate() {
  //   window.FB.XFBML.parse();
  // }


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
    <h3 className="login-time">You Last Login: {userObj.metadata.lastSignInTime}</h3>
  <div className="fb-comments" data-href="https://my-dash-93e26.firebaseapp.com/" data-width="500" data-numposts="10"></div>
  </div>
</div>
  </div>
  </div>
    );
  }
}

export default Profile;
