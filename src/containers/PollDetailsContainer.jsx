import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PollDetails from '../components/PollDetails';
import EntryList from '../components/EntryList';

import * as pollDetailActions from '../actions/pollDetails';

class PollDetailsContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.registerListeners(this.props.params);
  }

  componentWillUnmount() {
    this.props.unregisterListeners(this.props.params);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="panel panel-default">
           <PollDetails { ...this.props } />
           <EntryList { ...this.props }/>
          </div>
        </div>
      </div>
    );
  }
}

PollDetailsContainer.propTypes = {
  params: PropTypes.object.isRequired,
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired
};

export default connect(
  state => ({poll: state.pollDetails}),
  pollDetailActions
)(PollDetailsContainer);
