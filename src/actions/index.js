/*
 * action types
 */
export const SET_POLLS = 'SET_POLLS';
export const ADD_POLL = 'ADD_POLL';

export const ADD_ENTRY = 'ADD_ENTRY';

/*
 * other constants
 */



/*
 * action creators
 */

export function setPolls(polls) {
  return { type: SET_POLLS, polls };
}

export function addPoll(title) {
  return { type: ADD_POLL, title };
}

export function addEntry(idPoll, title) {
  return { type: ADD_ENTRY, idPoll, title };
}