import React from 'react';
import { Link } from 'react-router-dom';
import authData from '../../../helpers/data/authData';
import friendData from '../../../helpers/data/friendData';
import FriendCard from '../../shared/FriendCard/FriendCard';
import './Friends.scss';

class Friends extends React.Component {
  state = {
    friends: [],
  }

  getFriends = () => {
    friendData.getAllFriends(authData.getUid())
      .then((friends) => this.setState({ friends }))
      .catch((err) => console.error('error from friends', err));
  }

  componentDidMount() {
    this.getFriends();
  }

  render() {
    return (
   <div className="Friends">
        {this.state.friends.map((friend) => <FriendCard key={friend.id} friend={friend}/>)}
   </div>
    );
  }
}

export default Friends;
