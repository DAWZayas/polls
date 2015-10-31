import { connect } from 'react-redux';
import { cancelAction, confirmAction } from '../actions';

import ConfirmDialog from '../components/ConfirmDialog';

function mapStateToProps(state) {
  const action = state.actionsPending.first();
  return !action ?
  	{ isOpen: false } :
  	{
	  isOpen: true,
	  action: action,
	  msg: action.meta.confirm.msg
  	};
}

function mapActionsToProps(dispatch) {
  return {
  	onCancelClick: (action) => dispatch(cancelAction(action)),
  	onConfirmClick: (action) => dispatch(confirmAction(action))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ConfirmDialog);