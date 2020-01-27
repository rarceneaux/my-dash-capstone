import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Share from '../Share/Share';


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
    const { event, verses } = this.props;
    console.log(verses.data);
    return (
      <div className="EventCard">
  <img src={event.imgUrl} className="event-pic" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">Dash Title: {event.title}</h5>
  <h5 className="text-center">Dash Summary:</h5>
  <p className="card-text">{event.summary}</p>
  <Link className="btn btn-secondary edit" to={`/event/${event.id}/edit`}>Edit Dash</Link>
  <button className="btn btn-secondary delete" onClick={this.deleteEventEvent}>Delete Dash</button>
  <Share event={this.event}/>
    </div>
    </div>
    );
  }
}

export default EventCard;
