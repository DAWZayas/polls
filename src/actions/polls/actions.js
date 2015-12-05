import {
  SET_POLLS,
  ADD_POLL_ERROR,
  REMOVE_POLL_ERROR
} from './action-types';

import { createActionConfirmation } from '../confirm';

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

export function removePoll(idPoll, pollTitle) {
  return (dispatch, getState) => {
    dispatch(createActionConfirmation(`Are you sure you want to delete de poll with title "${pollTitle}"?`, () => {
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
    }));
  };
}

