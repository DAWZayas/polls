import { createActionConfirmation } from '../actions';

const confirm = store => next => action => {
  if (!action.meta || !action.meta.confirm || !action.meta.confirm.pending) {
  	return next(action);
  }
  const actionConfirm = createActionConfirmation(action);
  const promise = new Promise(function (resolve, reject) {
  	action.meta.confirm.resolve = resolve;
  	action.meta.confirm.reject = reject;
  });
  store.dispatch(actionConfirm);
  return promise;
};

export default confirm;