import {
  SET_POLLS,
  ADD_POLL_ERROR,
  REMOVE_POLL_ERROR
} from './action-types';

export function setPolls(polls) {
  return { type: SET_POLLS, polls };
}

export function addPoll(title) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('polls')
      .push({title}, error => {
        if (error) {
          console.error('ERROR @ addPoll :', error); // eslint-disable-line no-console
          dispatch({
            type: ADD_POLL_ERROR,
            payload: error,
        });
      }
    });
  };
}

export function removePoll(idPoll) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`polls/${idPoll}`)
      .remove(error => {
        if (error) {
          console.error('ERROR @ removePoll :', error); // eslint-disable-line no-console
          dispatch({
            type: REMOVE_POLL_ERROR,
            payload: error,
        });
      }
    });
  };
}

