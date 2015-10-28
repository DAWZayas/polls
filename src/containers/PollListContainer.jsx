import { connect } from 'react-redux';

import PollList from '../components/PollList';
import { addPoll } from '../actions';

function mapStateToProps(state) {
  return {
    polls: state.polls
  };
}

function mapActionsToProps(dispatch) {
  return {
    onAddPullClick: title => dispatch(addPoll(title))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PollList);