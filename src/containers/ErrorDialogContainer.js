import { connect } from 'react-redux';
import { confirmAction } from '../actions/error';

import ErrorDialog from '../components/ErrorDialog';

function mapStateToProps(state) {
  const action = state.actionsError.first();
  return !action ?
    { isOpen: false } :
    {
      isOpen: true,
      action
    };
}

function mapActionsToProps(dispatch) {
  return {
    onConfirmClick: (action) => dispatch(confirmAction(action))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ErrorDialog);
