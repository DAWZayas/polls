import React, { Component, PropTypes } from 'react';
import { Modal, ModalClose } from 'react-modal-bootstrap';

export default class ConfirmDialog extends Component {

  constructor(props) {
    super(props);
  }

  handleCancelClick() {
    const { onCancelClick, action } = this.props;
    onCancelClick(action);
  }

  handleConfirmClick() {
    const { onConfirmClick, action } = this.props;
    onConfirmClick(action);
  }

  render() {
    const { isOpen, action } = this.props;
    const msg = action && action.msg ? action.msg : 'Are you sure?' ;
    return (
      <Modal isOpen={isOpen} onRequestHide={() => this.handleCancelClick()} backdrop keyboard>
        <div className="modal-header">
          <ModalClose onClick={() => this.handleCancelClick()}/>
          <h4 className="modal-title">Confirm Dialog</h4>
        </div>
        <div className="modal-body">
          <p>{msg}</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-default" ref="cancelButton" onClick={() => this.handleCancelClick()}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={() => this.handleConfirmClick()}>
            Do it!
          </button>
        </div>
      </Modal>
    );
  }
}

ConfirmDialog.propTypes = {
  isOpen: PropTypes.bool,
  action: PropTypes.object,
  onCancelClick: PropTypes.func,
  onConfirmClick: PropTypes.func
};

ConfirmDialog.defaultProps = {
  isOpen: false
};
