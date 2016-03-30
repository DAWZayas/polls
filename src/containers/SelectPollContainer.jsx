import { connect } from 'react-redux';

import SelectPoll from '../components/SelectPoll';
import * as pollSearchActions from '../actions/pollSearch';

function mapStateToProps(state) {
  return {
    polls: state.pollSearch
  };
}

export default connect(
  mapStateToProps, pollSearchActions
)(SelectPoll);
