import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import polls from './poll';
import entries from './entry';

const pollApp = combineReducers({
  polls,
  entries,
  router
});

export default pollApp;