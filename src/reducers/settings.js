import * as settingsActions from '../actions/settings';

export const initialState = {
  saving: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case settingsActions.SAVING_SETTINGS:
      return {
        saving: true
      };
    case settingsActions.SAVED_SETTINGS:
      return {
        saving: false
      };

    default:
      return state;
  }
}
