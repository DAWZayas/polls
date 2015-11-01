import { SET_POLLS, ADD_POLL, REMOVE_POLL, SELECT_POLL, EDIT_POLL_TITLE } from '../actions';
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

function selectPoll(state, idPoll) {
  return state.map( poll => Object.assign({}, poll, { selected: idPoll === poll.id }) );
}

function editPollTitle(state, idPoll, title) {
  return state.map( poll => idPoll === poll.id ? Object.assign({}, poll, { title:  title}) : poll );
} 

export default function pollReducer(state = [], action) {
	switch (action.type) {
  	case SET_POLLS:
  		return setPolls(state, action.polls);
  	case ADD_POLL:
  		return addPoll(state, action.title);
    case REMOVE_POLL:
      return removePoll(state, action.idPoll);
    case SELECT_POLL:
      return selectPoll(state, action.idPoll);
    case EDIT_POLL_TITLE:
      return editPollTitle(state, action.idPoll, action.title);    
  	default:
  		return state;
  	}
}