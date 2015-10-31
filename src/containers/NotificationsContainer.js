import { connect } from 'react-redux';

import Notifications from '../components/Notifications';

function mapStateToProps(state) {
  return {
    messages: state.messages
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