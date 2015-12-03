import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class MenuItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { href, children, active } = this.props;

    return (
      <li className={ new RegExp('^' + href + '/?').test(active) && 'active' }><Link to={href}>{ children }</Link></li>
    );
  }
}


MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
