import React from 'react';
import authData from '../../../helpers/data/authData';
import eventData from '../../../helpers/data/eventData';
import EventCard from '../../shared/EventCard/EventCard';

import './Event.scss';

class Event extends React.Component {
  state = {
    events: [],
    verses: [],
  }

  getEvents = () => {
    eventData.getEventsByUid(authData.getUid())
      .then((events) => this.setState({ events }))
      .catch((err) => console.error('error from events', err));
  }

  getBiblesInfo = () => {
    eventData.getVerses()
      .then((verses) => this.setState({ verses }))
      .catch((err) => console.error('error from bibles', err));
  }

  componentDidMount() {
    this.getEvents();
    this.getBiblesInfo();
  }

  deleteAEvent = (eventId) => {
    eventData.deleteAEvent(eventId)
      .then(() => this.getEvents())
      .catch((err) => console.error('err', err));
  }

  render() {
    const { verses } = this.props;
    return (
      <div className="Event">
        {/* if ( events % 2) */}
      {this.state.events.map((event) => <EventCard key={event.id} event={event} verses={this.state.verses} deleteAEvent={this.deleteAEvent}/>)}
        {/* <div className="odd"></div> */}
        {/* {bibles} */}
        {/* <div className="even"></div> */}
   </div>
    );
  }
}

export default Event;
