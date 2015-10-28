import { SET_POLLS, ADD_POLL } from '../actions';

function setPolls(state, polls) {
  return polls.slice();
}

function addPoll(state, title) {
  return state.concat({
  	id: String(state.length),
  	title,
  	entries: []
  });
}

export default function pollReducer(state = [], action) {
	switch (action.type) {
  	case SET_POLLS:
  		return setPolls(state, action.polls);
  	case ADD_POLL:
  		return addPoll(state, action.title);
  	default:
  		return state;
  	}
}