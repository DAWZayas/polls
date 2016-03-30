import { CREATE_ACTION_ERROR, REMOVE_ACTION_ERROR } from '../actions/error';
import { OrderedMap } from 'immutable';
import { getId } from '../utils';

function createActionError(state, action) {
  const idError = getId();
  return state.set(idError, { idError, msg: action.msg } );
}

function removeActionError(state, actionError) {
  return state.remove(actionError.idError);
}

export default function entryReducer(state = OrderedMap(), action) { // eslint-disable-line new-cap
  switch (action.type) {
    case CREATE_ACTION_ERROR:
      return createActionError(state, action);
    case REMOVE_ACTION_ERROR:
      return removeActionError(state, action.action);
    default:
      return state;
  }
}

