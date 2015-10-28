import { createStore } from 'redux';
import reducer from '../reducers';

export default function configureStore() {
  return createStore(reducer);
}