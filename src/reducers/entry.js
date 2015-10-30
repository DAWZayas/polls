import { ADD_ENTRY } from '../actions';
import { getId } from '../utils';

function addEntry(state, idPoll, title) {
  const entry = {
    [getId()]: {
      idPoll,
      title
    }
  };
  return Object.assign({}, state, entry);
}

export default function entryReducer(state = {}, action) {
	switch (action.type) {
  	case ADD_ENTRY:
  		return addEntry(state, action.idPoll, action.title);
  	default:
  		return state;
  	}
}