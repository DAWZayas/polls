import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import confirm from '../middlewares/confirm';
import { FIREBASE_URL } from '../config';
import Firebase from 'firebase';
import { authActions } from '../actions';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, confirm),
  reduxReactRouter({ createHistory })
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState || { firebase: new Firebase(FIREBASE_URL) });
  store.dispatch(authActions.initAuth());
  return store;
}