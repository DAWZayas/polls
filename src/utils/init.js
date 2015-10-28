import { setPolls }  from '../actions';
import configureStore from '../store';
import polls from './examples';


export default function init() {
  const store = configureStore();
  store.dispatch(setPolls(polls));
  return store;
}