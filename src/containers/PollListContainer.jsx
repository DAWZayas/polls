import { connect } from 'react-redux';

import PollList from '../components/PollList';
import { addPoll, removePoll, selectPoll } from '../actions';

function mapStateToProps(state) {
  return {
    polls: state.polls
  };
}

function mapActionsToProps(dispatch) {
  return {
    onAddPoll: title => dispatch(addPoll(title)),
    onSelectPoll: idPoll => dispatch(selectPoll(idPoll)),
    onRemovePoll: (idPoll, title) => dispatch(removePoll(idPoll, title)).catch(_ => _)
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PollList);