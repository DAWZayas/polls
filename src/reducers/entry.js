import { ADD_ENTRY, REMOVE_ENTRY, VOTE_ENTRY, REMOVE_POLL } from '../actions';
import { getId } from '../utils';

function addEntry(state, idPoll, title) {
  const id = getId();
  const entry = {
    [id]: {
      id,
      idPoll,
      title,
      votes: 0
    }
  };
  return Object.assign({}, state, entry);
}

function removeEntry(state, idEntry) {
  return Object.values(state).reduce( (entries, entry) =>  entry.id === idEntry ? entries : Object.assign(entries, {[entry.id]: entry}), {});
}

function voteEntry(state, idEntry) {
  return Object.values(state).reduce( (entries, entry) =>  Object.assign(entries, {[entry.id]: Object.assign({}, entry, {votes: (entry.votes || 0) + (entry.id === idEntry ? 1 : 0) }) }), {});
}

function removePoll(state, idPoll) {
  return Object.values(state).reduce( (entries, entry) =>  entry.idPoll === idPoll ? entries : Object.assign(entries, {[entry.id]: entry}), {});
}

export default function entryReducer(state = {}, action) {
	switch (action.type) {
  	case ADD_ENTRY:
  		return addEntry(state, action.idPoll, action.title);
    case REMOVE_ENTRY:
      return removeEntry(state, action.idEntry);
    case VOTE_ENTRY:
      return voteEntry(state, action.idEntry);
    case REMOVE_POLL:
      return removePoll(state, action.idPoll);
  	default:
  		return state;
  }
}