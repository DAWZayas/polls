import { CREATE_ACTION_CONFIRMATION, REMOVE_ACTION_CONFIRMATION } from './action-types.js';

export function createActionConfirmation(msg, confirmAction) {
  return { type: CREATE_ACTION_CONFIRMATION, msg, confirmAction };
}

function removeActionConfirmation(pendingAction) {
  return { type: REMOVE_ACTION_CONFIRMATION, pendingAction };
}

export function cancelAction(action) {
  return dispatch => dispatch(removeActionConfirmation(action));
}

export function confirmAction(action) {
  return dispatch => {
    dispatch(removeActionConfirmation(action));
    action.confirmAction();
   };
}
