import { connect } from 'react-redux';

import PollVote from '../components/PollVote';

import * as pollDetailActions from '../actions/pollDetails';

export default connect(
  state => ({
    poll: state.pollDetails,
    canVote: state.auth.authenticated && state.pollDetails.state === 'unlocked',
    user: state.auth.id
  }),  pollDetailActions
)(PollVote);
