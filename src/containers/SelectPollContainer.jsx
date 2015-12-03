import { connect } from 'react-redux';

import SelectPoll from '../components/SelectPoll';

function mapStateToProps(state) {
  return {
    polls: state.polls
  };
}

export default connect(
  mapStateToProps
)(SelectPoll);
