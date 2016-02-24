import { connect } from 'react-redux';
import Settings from '../components/Settings';
import * as settingsActions from '../actions/settings';

export default connect(
  state => Object.assign({}, state.auth, {saving: state.settings.saving}),
  settingsActions
)(Settings);
