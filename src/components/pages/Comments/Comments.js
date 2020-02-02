import React from 'react';
import './Comments.scss';

class Comments extends React.Component {
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

  render() {
    return (<div className="b">
      <h1 className="comments">My-Dash Comments</h1>
    <div className="fb-comments" data-href="https://my-dash-93e26.firebaseapp.com/" data-width="700" data-numposts="10"></div>
    </div>
    );
  }
}

export default Comments;
