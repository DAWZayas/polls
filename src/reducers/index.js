import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import polls from './poll';
import entries from './entry';
import messages from './notify';
import actionsPending from './confirm';
import menu from './menu';

const pollApp = combineReducers({
  polls,
  entries,
  router,
  messages,
  actionsPending,
  menu
});

export default pollApp;