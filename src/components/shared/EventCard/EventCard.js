import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';


import './EventCard.scss';

import eventShape from '../../../helpers/propz/eventShape';

class EventCard extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
    deleteAEvent: PropTypes.func,
  }

  deleteEventEvent = (e) => {
    e.preventDefault();
    const { deleteAEvent, event } = this.props;
    deleteAEvent(event.id);
  }

  render() {
    const { event } = this.props;
    // const TimeStamp = moment().format('MMMM Do YYYY, h:mm:ss a');
    return (
<div className="EventCard">
  <img src={event.imgUrl} className="rounded-circle bs" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">Title: {event.title}</h5>
  <h2 className="text-center">Summary:</h2>
  <p className="card-text">{event.summary}</p>
  {/* <p>Event Posted: { TimeStamp}</p> */}
  <Link className="btn btn-secondary edit" to={`/event/${event.id}/edit`}>Edit Event</Link>
  <button className="btn btn-secondary" onClick={this.deleteEventEvent}>Delete Event</button>
    </div>
    </div>
    );
  }
}

export default EventCard;
