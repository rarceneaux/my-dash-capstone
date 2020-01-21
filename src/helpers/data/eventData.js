import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/events.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allEventsObj = result.data;
      console.log(result.data);
      const events = [];
      if (allEventsObj != null) {
        Object.keys(allEventsObj).forEach((itemId) => {
          const newEvent = allEventsObj[itemId];
          newEvent.id = itemId;
          events.push(newEvent);
        });
      }
      resolve(events);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleEvent = (eventId) => axios.get(`${baseUrl}/events/${eventId}.json`);

const addNewEvent = (EventInfo) => axios.post(`${baseUrl}/events.json`, EventInfo);

const deleteAEvent = (eventId) => axios.delete(`${baseUrl}/events/${eventId}.json`);

export default {
  getEventsByUid,
  getSingleEvent,
  addNewEvent,
  deleteAEvent,
};
