import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import FileUploader from 'react-firebase-file-uploader';
import authData from '../../../helpers/data/authData';
import eventData from '../../../helpers/data/eventData';
import 'firebase/storage';


import './EventForm.scss';

// const defaultEvent = {
//   title: '',
//   summary: '',
//   imgUrl: '',
// };

class EventForm extends React.Component {
  state = {
    title: '',
    summary: '',
    imgUrl: '',
    isUploading: false,
    progress: 0,
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
  const { isUploading } = this.state;
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
  const { isUploading } = this.state;
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

handleUploadStart =() => this.setState({ isUploading: true, progress: 0 });


handleUploadSuccess = (filename) => {
  this.setState({
    image: filename,
    isUploading: false,
    progress: 100,
  });
  firebase.storage().ref('images').child(filename).getDownloadURL()
    .then((url) => {
      this.setState({ imgUrl: url });
      // this.props.imgUrl(url);
    })
    .catch((err) => console.error('no image url', err));
};

render() {
  const {
    title,
    summary,
    isUploading,
  } = this.state;
  const { eventId } = this.props.match.params;
  return (
      <div className="EventForm">
         <form className="event-details">
       <div className="form-group">
         <label htmlFor="event-title">Dash Title</label>
         <input
         type="text"
         className="form-control"
         id="event-title"
         placeholder="Dash Title"
         value={title}
         onChange={this.titleChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="event-summary">Dash Summary</label>
         <input
         type="text"
         className="form-control"
         id="event-summary"
         placeholder="Dash Summary"
         value={summary}
         onChange={this.summaryChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="event-image"> Upload Photo</label>
         <FileUploader
         accept="image/*"
         name="image"
         id="imgUrl"
         storageRef={firebase.storage().ref('images/')}
         onUploadStart ={this.handleUploadStart}
         onUploadSuccess={this.handleUploadSuccess}
         />
       </div>
       { eventId
         ? <button className="btn btn-dark " disabled={isUploading} onClick={this.editEventAEvent}>Save Dash</button>
         : <button className="btn btn-dark " disabled={isUploading} onClick={this.saveEventAEvent}>Save Dash</button>
       }
      </form>
      </div>
  );
}
}

export default EventForm;
