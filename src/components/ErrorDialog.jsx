import React, { Component, PropTypes } from 'react';
import { Modal, ModalClose } from 'react-modal-bootstrap';

export default class ErrorDialog extends Component {

  constructor(props) {
    super(props);
  }

  handleConfirmClick() {
    const { onConfirmClick, action } = this.props;
    onConfirmClick(action);
  }

  render() {
    const { isOpen, action } = this.props;
    const msg = action && action.msg ? action.msg : 'An unknown error occurred' ;
    return (
      <Modal isOpen={isOpen} onRequestHide={() => this.handleConfirmClick()} backdrop keyboard>
        <div className="modal-header" style={{background: '#d9534f'}}>
          <ModalClose onClick={() => this.handleConfirmClick()}/>
          <h4 className="modal-title"><span className="glyphicon glyphicon-exclamation-sign"></span> Error Dialog</h4>
        </div>
        <div className="modal-body">
          <p>{msg}</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={() => this.handleConfirmClick()}>
            Close
          </button>
        </div>
      </Modal>
    );
  }
}

ErrorDialog.propTypes = {
  isOpen: PropTypes.bool,
  action: PropTypes.object,
  onConfirmClick: PropTypes.func
};

ErrorDialog.defaultProps = {
  isOpen: false
};
