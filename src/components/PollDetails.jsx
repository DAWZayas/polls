import React, { Component, PropTypes } from 'react';

export default class PollDetails extends Component {

  constructor(props) {
    super(props);
  }


  render() {
  	const { poll } = this.props;
    return (
      <div>
      	<h3>In { poll.title }</h3>
      </div>
    );
  }
}

PollDetails.propTypes = {
  poll: PropTypes.object.isRequired
 };
