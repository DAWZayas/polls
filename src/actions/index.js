import { pushState } from 'redux-router';

/*
 * action types
 */
export const SET_POLLS = 'SET_POLLS';
export const ADD_POLL = 'ADD_POLL';
export const REMOVE_POLL = 'REMOVE_POLL';

export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

/*
 * other constants
 */

export const NotifyLevels = {
	DEBUG: 'DEBUG',
	INFO: 'INFO',
	WARNING: 'WARNING',
	ERROR: 'ERROR'
};

/*
 * Poll action creators
 */

export function setPolls(polls) {
  return { type: SET_POLLS, polls, notify: {
  	level: NotifyLevels.INFO
  } };
}

export function addPoll(title) {
  return { type: ADD_POLL, title, notify: {
  	level: NotifyLevels.INFO
  } };
}

export function removePoll(idPoll) {
  return { type: REMOVE_POLL, idPoll, redirect: '/', notify: {
  	level: NotifyLevels.INFO
  } };
}

export function removePollAndNavigate(idPoll) {
  return function(dispatch) {
    dispatch(removePoll(idPoll));
    dispatch(pushState(null, '/poll'));
  };
}

/*
 * Entry action creators
 */

export function addEntry(idPoll, title) {
  return { type: ADD_ENTRY, idPoll, title, notify: {
  	level: NotifyLevels.INFO
  } };
}

export function removeEntry(idEntry) {
  return { type: REMOVE_ENTRY, idEntry, notify: {
  	level: NotifyLevels.INFO
  } };
}

/*
 * Notification action creators
 */

export function removeNotification(index) {
  return { type: REMOVE_NOTIFICATION, index };
}
