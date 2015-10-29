import { createStore, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from '../reducers';
import routes from '../routes';

const createStoreWithMiddleware = compose(
  reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(reducer, initialState);
}