import { SAVING_SETTINGS, SAVED_SETTINGS } from './action-types.js';

export function saveSettings(settings) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    firebase.child(`users/${auth.id}`).set(settings, error => {
			if (error) {
				console.error('ERROR @ saveSettings :', error); // eslint-disable-line no-console
			} else {
				dispatch({
					type: SAVED_SETTINGS
				});
      }
    });
    dispatch({
			type: SAVING_SETTINGS
    });
  };
}
