import { connect } from 'react-redux';

import PollVote from '../components/PollVote';

import { voteEntry } from '../actions';

function mapStateToProps(state) {
  const idPoll = state.router.params.idPoll;
  const poll = state.polls.filter( poll => idPoll === poll.id)[0] || {};
  const entries = Object.values(state.entries).filter( entry =>  entry.idPoll === poll.id );
  return { poll, entries };
}

function mapDispatchToProps(dispatch) {
  return {
    onVoteEntryClick: (idPoll) => dispatch(voteEntry(idPoll))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollVote);
