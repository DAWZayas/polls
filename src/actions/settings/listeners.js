import { SET_SETTINGS } from './action-types.js';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    firebase.child(`users/${auth.id}`).on('value', snapshot => {
      dispatch({
        type: SET_SETTINGS,
        settings: snapshot.val()
      });
    });
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    firebase.child(`users/${auth.id}`).off();
  };
}
