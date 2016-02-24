import { getId } from '../../utils';
import { NotifyLevels } from './constants';

import {
  ADD_NOTIFICATION,
  SET_NOTIFICATION_AS_READED,
  REMOVE_NOTIFICATION,
  REMOVE_ALL_NOTIFICATIONS } from './action-types.js';

export function addNotification(text, level = NotifyLevels.INFO) {
  return { type: ADD_NOTIFICATION, notification:
    {
      id: getId(),
      text: text,
      level: level,
      created: new Date,
      pending: true,
      isNew: true
    }
  };
}

export function setNotificationAsReaded(index) {
  return { type: SET_NOTIFICATION_AS_READED, index };
}

export function removeNotification(index) {
  return { type: REMOVE_NOTIFICATION, index };
}

export function removeAllNotifications() {
  return { type: REMOVE_ALL_NOTIFICATIONS };
}
