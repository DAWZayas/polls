import { SET_POLL_SEARCH, RESET_POLL_SEARCH } from '../actions/pollSearch';

function setPolls(state, polls) {
  return polls.slice();
}

export default function pollSeachReducer(state = [], action) {
  switch (action.type) {
    case SET_POLL_SEARCH:
      return setPolls(state, action.polls);
    case RESET_POLL_SEARCH:
      return [];
    default:
      return state;
    }
}
