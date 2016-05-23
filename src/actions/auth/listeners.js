import { pushState } from 'redux-router';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.onAuth( () => { // is not working. See: http://grokbase.com/t/gg/firebase-talk/14az5zfpxt/firebase-onauth-events-arent-sent-across-separate-web-pages
      dispatch(pushState(null, '/'));
    });
  };
}
