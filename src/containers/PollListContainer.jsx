import { connect } from 'react-redux';

import PollList from '../components/PollList';
import { addPoll, removePoll as removePoll } from '../actions';

function mapStateToProps(state) {
  return {
    polls: state.polls
  };
}

function mapActionsToProps(dispatch) {
  return {
    onAddPullClick: title => dispatch(addPoll(title)),
    onRemovePollClick: (idPoll, title) => dispatch(removePoll(idPoll, title)).catch(_ => _)
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PollList);