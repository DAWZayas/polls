import { ADD_ENTRY, REMOVE_ENTRY } from '../actions';
import { getId } from '../utils';

function addEntry(state, idPoll, title) {
  const id = getId();
  const entry = {
    [id]: {
      id,
      idPoll,
      title
    }
  };
  return Object.assign({}, state, entry);
}

function removeEntry(state, idEntry) {
  return Object.values(state).reduce( (entries, entry) =>  entry.id === idEntry ? entries : Object.assign(entries, {[entry.id]: entry}), {});
}

export default function entryReducer(state = {}, action) {
	switch (action.type) {
  	case ADD_ENTRY:
  		return addEntry(state, action.idPoll, action.title);
    case REMOVE_ENTRY:
      return removeEntry(state, action.idEntry);
  	default:
  		return state;
  }
}