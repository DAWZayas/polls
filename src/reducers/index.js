import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import polls from './poll';

const pollApp = combineReducers({
  polls,
  router
});

export default pollApp;