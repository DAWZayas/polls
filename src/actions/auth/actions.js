import { pushState } from 'redux-router';
import { INIT_AUTH, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './action-types.js';
import { tokens } from '../../utils/tokens';

export function authenticate(user) {
  return (dispatch, getState) => {
    const { firebase } = getState();

    dispatch(pushState(null, '/'));

    firebase.authWithCustomToken(tokens[user], (error, authData) => {
      if (error) {
        console.error('ERROR @ authWithCustomToken :', error); // eslint-disable-line no-console
      }
      else {
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: authData,
          meta: {
            timestamp: Date.now()
          }
        });
      }
    });
  };
}

export function initAuth() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    dispatch({
      type: INIT_AUTH,
      payload: firebase.getAuth(),
      meta: {
        timestamp: Date.now()
      }
    });
  };
}

export function signOut() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.unauth();
    dispatch(pushState(null, '/'));
    dispatch({
      type: SIGN_OUT_SUCCESS
    });
  };
}


export function cancelSignIn() {
  return dispatch => {
    return dispatch(pushState(null, '/'));
  };
}
