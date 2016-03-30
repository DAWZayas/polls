import { SET_POLLS } from '../actions/polls';

function setPolls(state, polls) {
  return polls.slice();
}

export default function pollReducer(state = [], action) {
  switch (action.type) {
    case SET_POLLS:
      return setPolls(state, action.polls);
    default:
      return state;
    }
}
