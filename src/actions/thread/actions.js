import {
  SET_THREAD
} from './action-types';

import Firebase from 'firebase';

export function setThread(thread) {
  return { type: SET_THREAD, thread };
}

export function addThread(path, text) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    firebase.child(path)
      .push({ text, owner: auth.id, picture: auth.settings ? auth.settings.picture : false, createdAt: Firebase.ServerValue.TIMESTAMP }, error => {
        if (error) {
          console.error('ERROR @ addThread :', error); // eslint-disable-line no-console
      }
    });

  };
}
