import { CREATE_ACTION_CONFIRMATION, REMOVE_ACTION_CONFIRMATION } from '../actions/confirm';
import { OrderedMap } from 'immutable';
import { getId } from '../utils';

function createActionConfirmation(state, action) {
  const idConfirmation = getId();
  return state.set(idConfirmation, Object.assign({}, action, { idConfirmation } ));
}

function removeActionConfirmation(state, pendingAction) {
  return state.remove(pendingAction.idConfirmation);
}

export default function entryReducer(state = OrderedMap(), action) { // eslint-disable-line new-cap
  switch (action.type) {
    case CREATE_ACTION_CONFIRMATION:
      return createActionConfirmation(state, action);
    case REMOVE_ACTION_CONFIRMATION:
      return removeActionConfirmation(state, action.pendingAction);
    default:
      return state;
  }
}

