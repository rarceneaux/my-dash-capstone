import React from 'react';
import authData from '../../../helpers/data/authData';
import eventData from '../../../helpers/data/eventData';

import './EventForm.scss';

class EventForm extends React.Component {
  state = {
    title: '',
    summary: '',
    imgUrl: '',
  }

  componentDidMount() {
    const { eventId } = this.props.match.params;
    if (eventId) {
      eventData.getSingleEvent(eventId)
        .then((response) => {
          const event = response.data;
          this.setState({ title: event.title, summary: event.summary, imgUrl: event.imgUrl });
          console.log(this.state);
        })
        .catch((err) => console.error('err', err));
    }
  }

titleChange = (e) => {
  e.preventDefault();
  this.setState({ title: e.target.value });
}

summaryChange = (e) => {
  e.preventDefault();
  this.setState({ summary: e.target.value });
}

eventImgUrlChange = (e) => {
  e.preventDefault();
  this.setState({ imgUrl: e.target.value });
}

saveEventAEvent = (e) => {
  e.preventDefault();
  const newEvent = {
    title: this.state.title,
    summary: this.state.summary,
    imgUrl: this.state.imgUrl,
    uid: authData.getUid(),
  };
  eventData.addNewEvent(newEvent)
    .then(() => this.props.history.push('/event'))
    .catch((err) => console.error('err', err));
}

editEventAEvent = (e) => {
  const { eventId } = this.props.match.params;
  e.preventDefault();
  const newEvent = {
    title: this.state.title,
    summary: this.state.summary,
    imgUrl: this.state.imgUrl,
    uid: authData.getUid(),
  };
  eventData.updateAEvent(eventId, newEvent)
    .then(() => this.props.history.push('/event'))
    .catch((err) => console.error('err', err));
}

render() {
  const { title, summary, imgUrl } = this.state;
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
         value={title}
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
         value={summary}
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
         value={imgUrl}
         onChange={this.eventImgUrlChange}
         />
       </div>
       { eventId
         ? <button className="btn btn-secondary" onClick={this.editEventAEvent}>Save Event</button>
         : <button className="btn btn-secondary" onClick={this.saveEventAEvent}>Save</button>
       }
      </form>
      </div>
  );
}
}

export default EventForm;
