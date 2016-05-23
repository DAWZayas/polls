import { SET_THREAD } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('thread');

    ref.on('value', snapshot => {
      const thread = snapshot.val();
      dispatch(
        {
          type: SET_THREAD,
          thread
        }
      );
    });
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('thread');
    ref.off();
    dispatch({
      type: SET_THREAD,
      polls: []
    });
  };
}
