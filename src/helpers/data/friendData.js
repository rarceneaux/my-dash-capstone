import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllFriends = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/friends.json`)
    .then((result) => {
      const allsFriendObj = result.data;
      console.log(result.data);
      const friends = [];
      if (allsFriendObj != null) {
        Object.keys(allsFriendObj).forEach((friendId) => {
          const NewFriend = allsFriendObj[friendId];
          NewFriend.id = friendId;
          friends.push(NewFriend);
        });
      }
      resolve(friends);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getAllFriends };
