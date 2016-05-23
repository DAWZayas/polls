import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';
import createLogger from 'redux-logger';
import { FIREBASE_URL } from '../config';
import Firebase from 'firebase';
import { initAuth } from '../actions/auth';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory }),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {

  const store = createStoreWithMiddleware(reducer,
    initialState || { firebase: new Firebase(process.env.FIREBASE_URL || FIREBASE_URL) }
  );

  store.dispatch(initAuth());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
