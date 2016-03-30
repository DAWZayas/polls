import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import * as authActions from '../actions/auth';

export default connect(
  state => state.auth,
  authActions
)(SignIn);
