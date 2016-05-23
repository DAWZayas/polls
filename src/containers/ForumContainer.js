import { connect } from 'react-redux';
import * as threadActions from '../actions/thread';

import Forum from '../components/Forum';

function mapStateToProps(state) {
  return { thread: state.thread, auth: state.auth };
}

export default connect(
  mapStateToProps,
  threadActions
)(Forum);
