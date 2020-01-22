import React from 'react';
import authData from '../../../helpers/data/authData';
import eventData from '../../../helpers/data/eventData';
import EventCard from '../../shared/EventCard/EventCard';
// import EventForm from '../EventForm/EventForm';

import './Event.scss';

class Event extends React.Component {
  state = {
    events: [],
  }

  getEvents = () => {
    eventData.getEventsByUid(authData.getUid())
      .then((events) => this.setState({ events }))
      .catch((err) => console.error('error from events', err));
  }

  componentDidMount() {
    this.getEvents();
  }

  deleteAEvent = (eventId) => {
    eventData.deleteAEvent(eventId)
      .then(() => this.getEvents())
      .catch((err) => console.error('err', err));
  }

  render() {
    return (
      <div className="Event">
      {this.state.events.map((event) => <EventCard key={event.id} event={event} deleteAEvent={this.deleteAEvent} />)}
   </div>
    );
  }
}

export default Event;
