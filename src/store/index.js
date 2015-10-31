import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from '../reducers';
import routes from '../routes';
import thunk from 'redux-thunk';
import confirm from '../middlewares/confirm';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, confirm),
  reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(reducer, initialState);
}