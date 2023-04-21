import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handelProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => {
      const newList = [];
      for (const res of results) {
        newList.push({
          status: res.status,
          value: res.value || res.reason.toString(),
        });
      }
      return newList;
    })
    .catch((error) => error);
}
