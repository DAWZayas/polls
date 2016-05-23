import { SET_THREAD } from '../actions/thread';

function setThread(state, thread) {
  return Object.assign({}, thread);
}

export default function threadReducer(state = {}, action) {
  switch (action.type) {
    case SET_THREAD:
      return setThread(state, action.thread);
    default:
      return state;
    }
}
