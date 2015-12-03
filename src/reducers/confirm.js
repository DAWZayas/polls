import { CREATE_ACTION_CONFIRMATION, REMOVE_ACTION_CONFIRMATION } from '../actions';
import { OrderedMap } from 'immutable';
import { getId } from '../utils';

function changePendingState(action) {
  //TODO: change to pure functional style
  action.meta.confirm.pending = false;
  return action;
}

function createActionConfirmation(state, pendingAction) {
  const idConfirmation = getId();
  return state.set(idConfirmation, Object.assign({}, changePendingState(pendingAction), { idConfirmation } ));
}

function removeActionConfirmation(state, pendingAction) {
  return state.remove(pendingAction.idConfirmation);
}

export default function entryReducer(state = OrderedMap(), action) { // eslint-disable-line new-cap
  switch (action.type) {
    case CREATE_ACTION_CONFIRMATION:
      return createActionConfirmation(state, action.pendingAction);
    case REMOVE_ACTION_CONFIRMATION:
      return removeActionConfirmation(state, action.pendingAction);
    default:
      return state;
  }
}

