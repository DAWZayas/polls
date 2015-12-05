import { SET_POLL, RESET_POLL } from './action-types';
import { pushState } from 'redux-router';

export function registerListeners(params) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child(`polls/${params.idPoll}`);
    ref.on('value', snapshot => dispatch(
      snapshot.exists() ?
        {
          type: SET_POLL,
          poll: Object.assign({}, { id: params.idPoll }, snapshot.val())
        } :
        pushState(null, '/')
    ));
  };
}

export function unregisterListeners(params) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child(`polls/${params.idPoll}`);
    ref.off();
    dispatch({
      type: RESET_POLL
    });
  };
}
