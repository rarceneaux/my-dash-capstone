import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUsersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allUsersObj = result.data;
      // console.log(result.data);
      const users = [];
      if (allUsersObj != null) {
        Object.keys(allUsersObj).forEach((userId) => {
          const NewUser = allUsersObj[userId];
          NewUser.id = userId;
          users.push(NewUser);
        });
      }
      resolve(users);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getUsersByUid };
