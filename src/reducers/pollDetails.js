import { SET_POLL, RESET_POLL } from '../actions/pollDetails';

export const initialState = {
    id: null,
    title: '***** Unknown *****',
    entries: {}
};

export default function entryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POLL:
      return action.poll;
    case RESET_POLL:
      return initialState;
    default:
      return state;
  }
}
