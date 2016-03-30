import { SET_POLLS } from './action-types';
import { addNotification } from '../notify/actions';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`myPolls/${userId}`);

    ref.on('value', myPollsSnapshot => {
      const promises = Object.keys(myPollsSnapshot.val() || []).map( pollId => new Promise(
        resolve => firebase.child(`polls/${pollId}`).once('value', snapshot => resolve({ id: pollId, title: snapshot.val().title, state: myPollsSnapshot.val()[pollId].state } ))
      ));

      Promise.all(promises).then(function(polls) {
        dispatch({
          type: SET_POLLS,
          polls
        });
      });

    });

    ref.orderByChild('createdAt').startAt(Date.now()).on('child_added', () => {
      dispatch(addNotification('Added a new poll'));
    });

    ref.on('child_removed', () => {
      dispatch(addNotification('Poll removed'));
    });

  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`myPolls/${userId}`);
    ref.off();
    dispatch({
      type: SET_POLLS,
      polls: []
    });
  };
}
