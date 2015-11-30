import { pushState } from 'redux-router';
import sequencer from './sequencer';

/*
 * action types
 */
export const SET_POLLS = 'SET_POLLS';
export const ADD_POLL = 'ADD_POLL';
export const REMOVE_POLL = 'REMOVE_POLL';

export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';
export const EDIT_POLL_TITLE = 'EDIT_POLL_TITLE';
export const VOTE_ENTRY = 'VOTE_ENTRY';

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const REMOVE_ALL_NOTIFICATIONS = 'REMOVE_ALL_NOTIFICATIONS';
export const SET_NOTIFICATION_AS_READED = 'SET_NOTIFICATION_AS_READED';

export const CREATE_ACTION_CONFIRMATION = 'CREATE_ACTION_CONFIRMATION';
export const REMOVE_ACTION_CONFIRMATION = 'REMOVE_ACTION_CONFIRMATION';

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
  return { type: SET_POLLS, polls, 
  	meta: {
  	  notify: { level: NotifyLevels.INFO }
  	}
  };
}

export function addPoll(title) {
  return { type: ADD_POLL, title, 
  	meta: {
  	  notify: { level: NotifyLevels.INFO }
  	}
  };
}

export function removePoll(idPoll, titlePoll) {
  return { type: REMOVE_POLL, idPoll, redirect: '/', 
  	meta: {
  	  notify: { level: NotifyLevels.INFO },
  	  confirm: {
  	  	pending: true,
  		  msg: `Are you sure you want to remove the "${titlePoll}" poll?`
      }
  	}
  };
}

export function removePollAndNavigate(idPoll, title) {
  return dispatch => sequencer([
      () => dispatch(removePoll(idPoll, title)),
      () => dispatch(pushState(null, '/poll'))
    ]);
}

export function editPollTitle(idPoll, title) {
  return { type: EDIT_POLL_TITLE, idPoll, title, 
    meta: {
      notify: { level: NotifyLevels.INFO }
    }
  };
}

/*
 * Entry action creators
 */

export function addEntry(idPoll, title) {
  return { type: ADD_ENTRY, idPoll, title, 
  	meta: {
  		notify: { level: NotifyLevels.INFO }
  	}
  };
}

export function removeEntry(idEntry) {
  return { type: REMOVE_ENTRY, idEntry, 
  	meta: {
  		notify: { level: NotifyLevels.INFO }
  	}
  };
}

export function voteEntry(idEntry) {
  return { type: VOTE_ENTRY, idEntry, 
    meta: {
      notify: { level: NotifyLevels.INFO }
    }
  };
}

/*
 * Notification action creators
 */

export function setNotificationAsReaded(index) {
  return { type: SET_NOTIFICATION_AS_READED, index };
}

export function removeNotification(index) {
  return { type: REMOVE_NOTIFICATION, index };
}

export function removeAllNotifications() {
  return { type: REMOVE_ALL_NOTIFICATIONS };
}

/*
 * Confirm action creators
 */

export function createActionConfirmation(pendingAction) {
  return { type: CREATE_ACTION_CONFIRMATION, pendingAction };
}

function removeActionConfirmation(pendingAction) {
  return { type: REMOVE_ACTION_CONFIRMATION, pendingAction };
}

export function cancelAction(pendingAction) {
  return dispatch => sequencer([
      () => pendingAction.meta.confirm.reject(pendingAction),
      () => dispatch(removeActionConfirmation(pendingAction))
    ]);
}

export function confirmAction(pendingAction) {
  return dispatch => sequencer([
      () => dispatch(removeActionConfirmation(pendingAction)),
      () => dispatch(pendingAction),
      () => pendingAction.meta.confirm.resolve(pendingAction)
    ]);
}
