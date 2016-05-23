import { SET_POLL_SEARCH, RESET_POLL_SEARCH } from './action-types';
import { MIN_SEARCH_STRING_LENGTH } from './constants';

export function pollSearch(startAt) {
 return (dispatch, getState) => {
  if (startAt.length < MIN_SEARCH_STRING_LENGTH) {
    return dispatch({
      type: RESET_POLL_SEARCH
    });
  }
   const { firebase } = getState();
   const ref = firebase.child('polls');
   ref.orderByChild('title').startAt(startAt).endAt(`${startAt}\uf8ff`).once('value', snapshot => dispatch({
     type: SET_POLL_SEARCH,
     polls: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title, state: snapshot.val()[id].state})).filter( poll => poll.state !== 'locked')
   }));
  };
}

export function resetPollSearch() {
  return dispatch => {
    return dispatch({
      type: RESET_POLL_SEARCH
    });
  };
}
