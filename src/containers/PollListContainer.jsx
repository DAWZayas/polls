import { connect } from 'react-redux';

import PollList from '../components/PollList';
import * as pollsActions from '../actions/polls';

export default connect(
  state => ({polls: state.polls, auth: state.auth}),
  pollsActions
)(PollList);
