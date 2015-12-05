import { SET_POLLS } from './action-types';
import { addNotification } from '../notify/actions';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('polls');

    ref.on('value', snapshot => {
      dispatch({
        type: SET_POLLS,
        polls: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title}) )
      });
    });

    ref.orderByChild('createdAt').startAt(Date.now()).on('child_added', snapshot => {
      const newPoll = snapshot.val();
      dispatch(addNotification(`Added a new poll: "${newPoll.title}"`));
    });

    ref.on('child_removed', snapshot => {
      const poll = snapshot.val();
      dispatch(addNotification(`Poll removed: "${poll.title}"`));
    });

  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('polls');
    ref.off();
    dispatch({
      type: SET_POLLS,
      polls: []
    });
  };
}
