import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import polls from './poll';
import entries from './entry';
import messages from './notify';
import actionsPending from './confirm';

const pollApp = combineReducers({
  polls,
  entries,
  router,
  messages,
  actionsPending
});

export default pollApp;