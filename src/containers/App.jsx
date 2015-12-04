import React, { Component, PropTypes } from 'react';
import MenuContainer from './MenuContainer';
import ConfirmDialogContainer from './ConfirmDialogContainer';
import { authActions } from '../actions';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const { auth, history } = this.props;

    if (auth.authenticated && !nextProps.auth.authenticated) {
      history.replaceState(null, authActions.POST_SIGN_OUT_PATH);
    }
    else if (!auth.authenticated && nextProps.auth.authenticated) {
      history.replaceState(null, authActions.POST_SIGN_IN_PATH);
    }
  }

  signOut() {
    this.props.signOut();
    window.location.replace('/');
  }

  render() {
    const { auth, children } = this.props;
    return (
      <div>
        <div className="row">
          {auth.authenticated ? <button className="btn" type="button" onClick={ () => this.signOut() }>Sign out</button> : null}
          <MenuContainer />
          <div>
            <ConfirmDialogContainer/>
          </div>
        </div>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node,
  history: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(
  state => ({
    auth: state.auth
  }
), authActions)(App);
