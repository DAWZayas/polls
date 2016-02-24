import React, { Component, PropTypes } from 'react';
import MenuContainer from './MenuContainer';
import ConfirmDialogContainer from './ConfirmDialogContainer';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <div className="row">
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
  history: PropTypes.object.isRequired
};

export default connect(
  state => ({
    auth: state.auth
  }))(App);
