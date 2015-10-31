import { connect } from 'react-redux';
import { removeNotification } from '../actions';

import NotificationsDetail from '../components/NotificationsDetail';

function mapStateToProps(state) {
  return {
    messages: state.messages.slice().reverse()
  };
}

function mapActionsToProps(dispatch) {
  return {
  	onRemoveNotificationClick: (index) => dispatch(removeNotification(index))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(NotificationsDetail);