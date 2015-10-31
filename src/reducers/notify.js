import { REMOVE_NOTIFICATION } from '../actions';

export default function notifyReducer(state = [], action) {
  switch (action.type) {
    case REMOVE_NOTIFICATION:
      return state.filter( (message, index) => index !== action.index );
    default:
      return action.notify ? state.concat({
        text: action.type,
        level: action.notify.level,
        created: new Date
      }) : state;
  }
  
}