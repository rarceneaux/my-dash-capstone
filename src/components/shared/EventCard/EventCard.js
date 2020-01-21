import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './EventCard.scss';

import eventShape from '../../../helpers/propz/eventShape';

class EventCard extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
  }

  render() {
    const { event } = this.props;
    return (
<div className="EventCard">
  <img src={event.imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{event.title}</h5>
  <p className="card-text">{event.summary}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
    </div>
    );
  }
}

export default EventCard;
