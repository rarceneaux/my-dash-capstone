import React from 'react';
import authData from '../../../helpers/data/authData';
import eventData from '../../../helpers/data/eventData';

import './EventForm.scss';

class EventForm extends React.Component {
  state = {
    eventTitle: '',
    eventSummary: '',
    eventImgUrl: '',
  }

  componentDidMount() {
    const { eventId } = this.props.match.params;
    if (eventId) {
      eventData.getSingleEvent(eventId)
        .then((response) => {
          this.setState({ eventTitle: response.data.eventTitle, eventSummary: response.data.eventSummary, eventImgUrl: response.data.eventImgUrl });
          this.getEventData(eventId);
        })
        .catch((err) => console.error('error in Event form', err));
    }
  }

titleChange = (e) => {
  e.preventDefault();
  this.setState({ eventTitle: e.target.value });
}

summaryChange = (e) => {
  e.preventDefault();
  this.setState({ eventSummary: e.target.value });
}

eventImgUrlChange = (e) => {
  e.preventDefault();
  this.setState({ eventImgUrl: e.target.value });
}

saveEventEvent = (e) => {
  e.preventDefault();
  const newEvent = {
    title: this.state.eventTitle,
    summary: this.state.eventSummary,
    imgUrl: this.state.eventImgUrl,
    uid: authData.getUid(),
  };
  eventData.addNewEvent(newEvent)
    .then(() => this.props.history.push('/event'))
    .catch((err) => console.error('err', err));
}

render() {
  const { eventTitle, eventSummary, eventImgUrl } = this.state;
  const { eventId } = this.props.match.params;
  return (
      <div className="EventForm">
         <form className="event-details">
       <div className="form-group">
         <label htmlFor="event-title">Event Title</label>
         <input 
         type="text"
         className="form-control"
         id="event-title"
         placeholder="Event Title"
         value={eventTitle}
         onChange={this.titleChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="event-summary">Event Summary</label>
         <input 
         type="text"
         className="form-control"
         id="event-summary"
         placeholder="Type Event Details"
         value={eventSummary}
         onChange={this.summaryChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="event-image">Event Img</label>
         <input
         type="text"
         className="form-control"
         id="event-image"
         placeholder="Add Event Photo"
         value={eventImgUrl}
         onChange={this.eventImgUrlChange}
         />
       </div>
       { eventId
         ? <button className="btn btn-secondary">Save Event</button>
         : <button className="btn btn-secondary" onClick={this.saveEventEvent}>Save</button>
       }
      </form>
      </div>
  );
}
}

export default EventForm;
