import React from 'react';
import authData from '../../../helpers/data/authData';
import eventData from '../../../helpers/data/eventData';
import EventCard from '../../shared/EventCard/EventCard';
import shareData from '../../../helpers/data/shareData';
import userData from '../../../helpers/data/userData';
// import friendData from '../../../helpers/data/friendData';
// import Friends from '../Friends/Friends';

import './Event.scss';

class Event extends React.Component {
  state = {
    events: [],
    verses: [],
    users: [],
    shares: [],
  }

  getEvents = () => {
    eventData.getEventsByUid(authData.getUid())
      .then((events) => this.setState({ events }))
      .catch((err) => console.error('error from events', err));
  }

  getShares = () => {
    shareData.getAllShares(authData.getUid())
      .then((shares) => this.setState({ shares }))
      .catch((err) => console.error('error from shares', err));
  }

  getUsers = () => {
    userData.getUsersByUid(authData.getUid())
      .then((users) => this.setState({ users }))
      .catch((err) => console.error('error from users', err));
  }

  getBiblesInfo = () => {
    eventData.getVerses()
      .then((verses) => this.setState({ verses }))
      .catch((err) => console.error('error from bibles', err));
  }

  componentDidMount() {
    this.getEvents();
    this.getBiblesInfo();
    this.getUsers();
    this.getShares();
  }

  deleteAEvent = (eventId) => {
    eventData.deleteAEvent(eventId)
      .then(() => this.getEvents())
      .catch((err) => console.error('err', err));
  }

  render() {
    const {
      verses,
      shares,
      users,
    } = this.props;
    return (
      <div className="Event">
      {this.state.events.map((event) => <EventCard key={event.id} event={event} verses={this.state.verses} deleteAEvent={this.deleteAEvent} />)}
   </div>
    );
  }
}

export default Event;
