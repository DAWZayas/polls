import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PollDetails from '../components/PollDetails';
import EntryList from '../components/EntryList';

import { removePoll } from '../actions/polls';
import * as pollDetailActions from '../actions/pollDetails';
import Spinner from '../components/Spinner';

class PollDetailsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.props.registerListeners(this.props.params);
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;

    if (!nextProps.auth.authenticated) {
      history.replaceState(null, '/');
    }

    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.props.unregisterListeners(this.props.params);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="panel panel-default">
           { this.state.loading ? <Spinner /> : (
            <div>
              <PollDetails { ...this.props } />
              <EntryList { ...this.props }/>
            </div>
           ) }
          </div>
        </div>
      </div>
    );
  }
}

PollDetailsContainer.propTypes = {
  params: PropTypes.object.isRequired,
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  state => ({ poll: state.pollDetails, auth: state.auth }),
  Object.assign( {}, pollDetailActions, { removePoll } )
)(PollDetailsContainer);
