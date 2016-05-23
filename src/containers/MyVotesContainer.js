import { connect } from 'react-redux';

import MyVotes from '../components/MyVotes';
import * as pollsActions from '../actions/polls';

export default connect(
  state => ({polls: state.polls, auth: state.auth}),
  pollsActions
)(MyVotes);
