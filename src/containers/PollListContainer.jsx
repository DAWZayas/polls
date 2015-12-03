import { connect } from 'react-redux';

import PollList from '../components/PollList';
import { addPoll, removePoll } from '../actions';

function mapStateToProps(state) {
  return {
    polls: state.polls
  };
}

function mapActionsToProps(dispatch) {
  return {
    onAddPoll: title => dispatch(addPoll(title)),
    onRemovePoll: (idPoll, title) => dispatch(removePoll(idPoll, title))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PollList);
