import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from '../reducers';
import routes from '../routes';
import thunk from 'redux-thunk';
import confirm from '../middlewares/confirm';
import DevTools from '../containers/DevTools';
import createLogger from 'redux-logger';
import { SELECT_POLL } from '../actions';


const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, confirm),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger({
    predicate: (getState, action) => action.type !== SELECT_POLL
  })),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState = {}) {

  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}