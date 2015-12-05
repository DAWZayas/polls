import {
  UPDATE_POLL_ERROR
} from './action-types';


import { pushState } from 'redux-router';
import sequencer from '../sequencer';
import { removePoll } from '../polls';

export function removePollAndNavigate(idPoll, title) {
  return dispatch => sequencer([
      () => dispatch(removePoll(idPoll, title)),
      () => dispatch(pushState(null, '/poll'))
    ]);
}

export function editPollTitle(idPoll, title) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`polls/${idPoll}`)
      .update({title}, error => {
        if (error) {
          console.error('ERROR @ updatePoll :', error); // eslint-disable-line no-console
          dispatch({
            type: UPDATE_POLL_ERROR,
            payload: error,
        });
      }
    });
  };
}

export function addEntry(idPoll, title) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`polls/${idPoll}/entries`)
      .push({ title, votes: 0 }, error => {
        if (error) {
          console.error('ERROR @ updatePoll :', error); // eslint-disable-line no-console
          dispatch({
            type: UPDATE_POLL_ERROR,
            payload: error,
        });
      }
    });
  };
}

export function removeEntry(idPoll, idEntry) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`polls/${idPoll}/entries/${idEntry}`)
      .remove(error => {
        if (error) {
          console.error('ERROR @ updatePoll :', error); // eslint-disable-line no-console
          dispatch({
            type: UPDATE_POLL_ERROR,
            payload: error,
        });
      }
    });
  };
}

export function voteEntry(idPoll, idEntry) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`polls/${idPoll}/entries/${idEntry}/votes`)
      .transaction(votes => votes + 1, error => {
        if (error) {
          console.error('ERROR @ updatePoll :', error); // eslint-disable-line no-console
          dispatch({
            type: UPDATE_POLL_ERROR,
            payload: error,
        });
      }
    });
  };
}
