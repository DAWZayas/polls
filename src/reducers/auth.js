import * as authActions from '../actions/auth';
import * as settingsActions from '../actions/settings';

export const initialState = {
  authenticated: false,
  id: null
};

export default function authReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case authActions.INIT_AUTH:
      const authenticated = payload !== null;
      return {
        authenticated,
        id: authenticated ? payload.uid : null,
        settings: payload.settings
      };

    case authActions.SIGN_IN_SUCCESS:
      return {
        authenticated: true,
        id: payload.uid,
        settings: payload.settings
      };

    case authActions.SIGN_OUT_SUCCESS:
      return {
        authenticated: false,
        id: null
      };

    case settingsActions.SET_SETTINGS:
      return Object.assign({}, state, {settings: action.settings});

    default:
      return state;
  }
}
