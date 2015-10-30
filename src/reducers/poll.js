import { SET_POLLS, ADD_POLL, REMOVE_POLL } from '../actions';
import { getId } from '../utils';

function setPolls(state, polls) {
  return polls.slice();
}

function addPoll(state, title) {
  return state.concat({
  	id: getId(),
  	title
  });
}

function removePoll(state, idPoll) {
  return state.filter( poll => idPoll !== poll.id);
}

export default function pollReducer(state = [], action) {
	switch (action.type) {
  	case SET_POLLS:
  		return setPolls(state, action.polls);
  	case ADD_POLL:
  		return addPoll(state, action.title);
    case REMOVE_POLL:
      return removePoll(state, action.idPoll);
  	default:
  		return state;
  	}
}