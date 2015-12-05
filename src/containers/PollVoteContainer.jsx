import { connect } from 'react-redux';

import PollVote from '../components/PollVote';

import * as pollDetailActions from '../actions/pollDetails';

export default connect(
  state => ({poll: state.pollDetails}),
  pollDetailActions
)(PollVote);
