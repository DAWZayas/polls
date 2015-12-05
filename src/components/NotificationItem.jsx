import React, { Component, PropTypes } from 'react';

export default class NotificationItem extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onShowMessage, index } = this.props;
    onShowMessage(index);
  }

  handleRemoveButtonClick(index) {
    this.props.onRemoveNotificationClick(index);
  }

  render() {
    const { message, index } = this.props;
    const className = message.isNew ? 'alert alert-info' : 'alert alert-success';
    return (
      <div className={className} role="alert">
        <button type="button" className="close" onClick={ () => this.handleRemoveButtonClick(index)}><span>&times;</span></button>
        <strong>Info:</strong> {message.text} at: {message.created.toLocaleString()}
      </div>
    );
  }
}

NotificationItem.propTypes = {
  index: PropTypes.number.isRequired,
  message: PropTypes.object.isRequired,
  onRemoveNotificationClick: PropTypes.func.isRequired,
  onShowMessage: PropTypes.func.isRequired
};
