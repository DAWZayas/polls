import React, { Component, PropTypes } from 'react';
import { Modal, ModalClose } from 'react-modal-bootstrap';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }

  handleCancelClick() {
    this.setState({ isOpen: false });
    this.props.cancelSignIn();
  }

  handlesignInWithHomerClick() {
    this.props.signInWithHomer();
  }

  handlesignInWithBartClick() {
    this.props.signInWithBart();
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Modal isOpen={isOpen} onRequestHide={() => this.handleCancelClick()} backdrop keyboard>
        <div className="modal-header">
          <ModalClose onClick={() => this.handleCancelClick()}/>
          <h4 className="modal-title">Sign in Dialog</h4>
        </div>
        <div className="modal-body">
          <button className="btn" type="button" onClick={ () => this.handlesignInWithHomerClick()}>Homer</button>
          <button className="btn" type="button" onClick={ () => this.handlesignInWithBartClick()}>Bart</button>
        </div>
      </Modal>
    );
  }

}

SignIn.propTypes = {
  cancelSignIn: PropTypes.func.isRequired,
  signInWithHomer: PropTypes.func.isRequired,
  signInWithBart: PropTypes.func.isRequired
};
