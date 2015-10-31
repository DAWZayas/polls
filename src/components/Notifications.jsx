import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        <Link to="/notifications">Messages <span className="badge">{messages.length}</span></Link>
      </div>
    );
  }
}

Notifications.propTypes = {
  messages: PropTypes.array
};

Notifications.defaultProps = { 
  messages: []
};