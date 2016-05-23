import Firebase from 'firebase';
import {
  UPDATE_POLL_ERROR
} from './action-types';

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
      .push({ title, votes: 0, createdAt: Firebase.ServerValue.TIMESTAMP }, error => {
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

export function voteEntry(idPoll, idEntry, lastVoted) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    firebase.child(`polls/${idPoll}/entries/${idEntry}/votes`)
      .transaction(votes => votes + 1, error => {
        if (error) {
          console.error('ERROR @ updatePoll :', error); // eslint-disable-line no-console
          dispatch({
            type: UPDATE_POLL_ERROR,
            payload: error,
        });
      } else {
        const userId = auth.id;
        const createdAt = Firebase.ServerValue.TIMESTAMP;
        if (lastVoted) {
          firebase.child(`myVotes/${userId}/${idPoll}/${lastVoted}`).remove();
          firebase.child(`polls/${idPoll}/entries/${lastVoted}/voters/${userId}`).remove();
          firebase.child(`polls/${idPoll}/entries/${lastVoted}/votes`).transaction(votes => votes - 1);
        }
        firebase.child(`myVotes/${userId}/${idPoll}`).set( { [idEntry]: { createdAt } });
        firebase.child(`polls/${idPoll}/entries/${idEntry}/voters`).set( { [userId]: { createdAt } });
      }
    });
  };
}
