import { pushState } from 'redux-router';
import { INIT_AUTH, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './action-types.js';
import { tokens } from '../../utils/tokens';
import * as settingsActions from '../settings';

function setUserSettings(firebase, dispatch, authData, nextActionType) {
  firebase.child(`users/${authData.uid}`).once('value', snapshot => {
    dispatch({
      type: nextActionType,
      payload: Object.assign({}, authData, {settings: snapshot.val()}),
      meta: {
        timestamp: Date.now()
      }
    });
    dispatch(settingsActions.registerListeners());
  });
}

export function authenticate(user) {
  return (dispatch, getState) => {
    const { firebase } = getState();

    dispatch(pushState(null, '/'));

    firebase.authWithCustomToken(tokens[user], (error, authData) => {
      if (error) {
        console.error('ERROR @ authWithCustomToken :', error); // eslint-disable-line no-console
      }
      else {
        setUserSettings(firebase, dispatch, authData, SIGN_IN_SUCCESS);
      }
    });
  };
}

export function initAuth() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const authData = firebase.getAuth();
    if (authData && authData.uid) {
      setUserSettings(firebase, dispatch, authData, INIT_AUTH);
    }
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
    dispatch(settingsActions.unregisterListeners());
  };
}


export function cancelSignIn() {
  return dispatch => {
    return dispatch(pushState(null, '/'));
  };
}
