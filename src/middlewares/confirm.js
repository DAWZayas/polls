import { createActionConfirmation } from '../actions';

const confirm = store => next => action => {
  return !action.meta || !action.meta.confirm || !action.meta.confirm.pending ?
  	next(action) :
  	store.dispatch(createActionConfirmation(action));
};

export default confirm;