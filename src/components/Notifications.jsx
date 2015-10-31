import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { pending, total } = this.props;
    return (
      <div>
        <Link to="/notifications">Messages <span className="badge">{total === 0 ? 0 : `${pending}/${total}`}</span></Link>
      </div>
    );
  }
}

Notifications.propTypes = {
  total: PropTypes.number,
  pending: PropTypes.number
};

Notifications.defaultProps = { 
  total: 0,
  pending: 0
};