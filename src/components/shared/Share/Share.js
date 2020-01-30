import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookIcon,
} from 'react-share';
import eventShape from '../../../helpers/propz/eventShape';

import './Share.scss';

class Share extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
  }

  render() {
    return (
      <div className="fb-share-button" data-href="https://my-dash-93e26.firebaseapp.com/" data-layout="button" data-size="large">
  <p className="share">Share On: </p>
      <a target="_" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmy-dash-93e26.firebaseapp.com%2F&amp;src=sdkpreparse"><FacebookIcon className="fb"/></a>      </div>
    );
  }
}

export default Share;
