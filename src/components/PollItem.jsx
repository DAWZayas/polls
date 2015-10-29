import React, { Component, PropTypes } from 'react';

export default class PollItem extends Component {

  render() {
    return <li className="list-group-item">{this.props.children}</li>;
  }

}

PollItem.propTypes = {
  children: PropTypes.element.isRequired,
};