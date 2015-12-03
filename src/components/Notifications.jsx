import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { pending, total, active } = this.props;
    let className = 'badge';
    if (pending  > 0) {
      className += ' badge-info';
    } else if (total !== 0) {
      className += ' badge-success';
    }
    return (
        <MenuItem href="/notifications" active={ active }>Messages <span className={ className }>{total === 0 ? 0 : `${pending}/${total}`}</span></MenuItem>
    );
  }
}

Notifications.propTypes = {
  total: PropTypes.number,
  pending: PropTypes.number,
  active: PropTypes.string.isRequired,
};

Notifications.defaultProps = {
  total: 0,
  pending: 0
};
