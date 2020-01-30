import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FriendCard.scss';

import friendShape from '../../../helpers/propz/friendShape';

class FriendCard extends React.Component {
  static propTypes = {
    friend: friendShape.friendShape,
  }


  render() {
    const { friend } = this.props;
    return (
    <div className="FriendCard">
      <div className="profile-all">
      <div className="what">
<div className="card-body fri-one">
<img src={friend.friendImgUrl} className="rounded-circle" alt="..."/>
    <h1 className="card-title names">{friend.name}</h1>
<Link className="btn btn-dark pro" to={'/event/new'}>View Profile</Link>
<Link className="btn btn-dark share" to={'/event'}>Share Dash</Link>
</div>
</div>
</div>
</div>
    );
  }
}

export default FriendCard;
