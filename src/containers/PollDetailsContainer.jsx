import React, { Component } from 'react';
import { connect } from 'react-redux';

import PollDetails from '../components/PollDetails';
import EntryList from '../components/EntryList';

import { addEntry, removeEntry, removePollAndNavigate } from '../actions';

class PollDetailsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  	return (
  		<div>
  			<PollDetails { ...this.props } />
  			<EntryList { ...this.props }/>
  		</div>
  	);
  }	
}

function mapStateToProps(state) {
  const idPoll = state.router.params.idPoll;
  const poll = state.polls.filter( poll => idPoll === poll.id)[0] || {};
  const entries = Object.values(state.entries).filter( entry =>  entry.idPoll === poll.id );
  return { poll, entries };
}

function mapDispatchToProps(dispatch) {
  return {
  	onAddEntryClick: (idPoll, title) => dispatch(addEntry(idPoll, title)),
    onRemoveEntryClick: (idEntry) => dispatch(removeEntry(idEntry)),
    onRemovePollClick: (idPoll) => dispatch(removePollAndNavigate(idPoll))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollDetailsContainer);