import { connect } from 'react-redux';

import Notifications from '../components/Notifications';

function mapStateToProps(state) {
  return {
    total: state.messages.length,
    pending: state.messages.filter( message => message.pending ).length
  };
}

function mapActionsToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Notifications);
