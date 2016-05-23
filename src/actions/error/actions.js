import { CREATE_ACTION_ERROR, REMOVE_ACTION_ERROR } from './action-types.js';

export function createActionError(msg) {
  return { type: CREATE_ACTION_ERROR, msg };
}

export function confirmAction(action) {
  return { type: REMOVE_ACTION_ERROR, action };
}
