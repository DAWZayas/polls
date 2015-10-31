import { REMOVE_NOTIFICATION } from '../actions';
import { ROUTER_DID_CHANGE } from 'redux-router/lib/constants';

function removeNotification(state, action) {
  return state.filter( (message, index) => index !== action.index );
}

function addNotification(state, action) {
  return action.notify ? state.concat({
        text: action.type,
        level: action.notify.level,
        created: new Date,
        readed: false
      }) : state;
}

function setAsReaded(state, path) {
  return path !== '/notifications' ? state : state.map( message => Object.assign({}, message, {readed: true}));
}

export default function notifyReducer(state = [], action) {
  switch (action.type) {
    case REMOVE_NOTIFICATION:
      return removeNotification(state, action);
    case ROUTER_DID_CHANGE:
      return setAsReaded(state, action.payload.location.pathname);
    default:
      return addNotification(state, action);
  }
  
}