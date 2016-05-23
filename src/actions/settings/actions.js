import { SAVING_SETTINGS, SAVED_SETTINGS } from './action-types.js';
import { createActionError } from '../error';
import { imageExist } from '../../utils';

export function saveSettings(settings) {
  const errorPicture = settings && 'picture' in settings && !imageExist(settings.picture);
  if (errorPicture) {
    return (dispatch) => dispatch(createActionError(`Invalid picture file ${settings.picture}`));
  }
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
