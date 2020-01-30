import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllShares = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shares.json`)
    .then((result) => {
      const allSharesObj = result.data;
      // console.log(result.data);
      const shares = [];
      if (allSharesObj != null) {
        Object.keys(allSharesObj).forEach((shareId) => {
          const newShare = allSharesObj[shareId];
          newShare.id = shareId;
          shares.push(newShare);
        });
      }
      resolve(shares);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getAllShares };
