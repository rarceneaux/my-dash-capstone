/* eslint-disable max-len */
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

const updateAEvent = (eventId, newEventInfo) => axios.put(`${baseUrl}/events/${eventId}.json`, newEventInfo);

const { key } = apiKeys.bibleRequest;
const bibleBaseUrl = 'https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/verses/JHN.3.16-JHN.4.1?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=false&include-verse-spans=false&use-org-id=false';

const getVerses = () => new Promise((resolve, reject) => {
  axios
    .get(`${bibleBaseUrl}`, {
      headers: {
        'api-key': key,
      },
    })
    .then((results) => {
      resolve(results.data);
      // console.log(results.data.data);
    })
    .catch((error) => reject(error));
});

export default {
  getEventsByUid,
  getSingleEvent,
  addNewEvent,
  deleteAEvent,
  updateAEvent,
  getVerses,
};
