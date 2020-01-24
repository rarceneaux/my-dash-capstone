import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import {
  FacebookShareButton, FacebookIcon,
} from 'react-share';


class Share extends React.Component {
  render() {
    return (
    <div className="fb-share-button" data-href="https://my-dash-93e26.firebaseapp.com/" data-layout="button" data-size="large"><a target="_" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmy-dash-93e26.firebaseapp.com%2F&amp;src=sdkpreparse">Share Dash</a>
    </div>
    );
  }
}

export default Share;
