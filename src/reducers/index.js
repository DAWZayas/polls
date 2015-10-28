import { combineReducers } from 'redux';
import polls from './poll';

const pollApp = combineReducers({
  polls
});

export default pollApp;