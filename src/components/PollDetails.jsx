import React, { Component, PropTypes } from 'react';

export default class PollDetails extends Component {

  constructor(props) {
    super(props);
  }

  handleRemoveButtonClick(idPoll, titlePoll) {
    this.props.onRemovePollClick(idPoll, titlePoll);
  }

  render() {
  	const { poll } = this.props;
    return (
      <div>
      	<h3>In { poll.title }</h3>
        <button onClick={() => this.handleRemoveButtonClick(poll.id, poll.title)} className="btn btn-warning">Remove</button>
      </div>
    );
  }
}

PollDetails.propTypes = {
  poll: PropTypes.object.isRequired,
  onRemovePollClick: PropTypes.func.isRequired
 };
