import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import { FIREBASE_URL } from '../config';
import Firebase from 'firebase';
import { initAuth } from '../actions/auth';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory })
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState || { firebase: new Firebase(process.env.FIREBASE_URL || FIREBASE_URL) });
  store.dispatch(initAuth());
  return store;
}