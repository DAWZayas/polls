import { connect } from 'react-redux';

import PollDetails from '../components/PollDetails';

function mapStateToProps(state) {
  return {
  	poll: state.polls[state.router.params.index]
  };
}

function mapActionsToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PollDetails);