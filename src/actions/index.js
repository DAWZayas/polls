import { pushState } from 'redux-router';

/*
 * action types
 */
export const SET_POLLS = 'SET_POLLS';
export const ADD_POLL = 'ADD_POLL';
export const REMOVE_POLL = 'REMOVE_POLL';

export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

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

export function removePoll(idPoll) {
  return { type: REMOVE_POLL, idPoll, redirect: '/' };
}

export function removePollAndNavigate(idPoll) {
  return function(dispatch) {
    dispatch(removePoll(idPoll));
    dispatch(pushState(null, '/poll'));
  };
}

export function addEntry(idPoll, title) {
  return { type: ADD_ENTRY, idPoll, title };
}

export function removeEntry(idEntry) {
  return { type: REMOVE_ENTRY, idEntry };
}