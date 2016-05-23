import React, { Component, PropTypes } from 'react';

export default class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  handleNewClick() {
    this.setState({
      editing: true
    });
  }

  handleOkClick() {
    this.setState({
      editing: false
    });
    this.props.addThread(this.props.path, this.refs.text.value);
  }

  handleCancelClick() {
    this.setState({
      editing: false
    });
  }

  render() {

    const { btnText } = this.props;
    const { editing } = this.state;

    const btn = <button className="btn btn-success" type="button" onClick={e => this.handleNewClick(e)}>{btnText ? btnText : "New Post"}</button>;
    const post = (
      <div>
        <textarea ref="text" cols="50" rows="3"></textarea>
        <button className="btn btn-danger" type="button" onClick={e => this.handleCancelClick(e)}><span className="glyphicon glyphicon-remove" /></button>
        <button className="btn btn-success" type="button" onClick={e => this.handleOkClick(e)}><span className="glyphicon glyphicon-ok" /></button>
      </div>
    );

    return (
      <div className="row">
        <div className="col-md-6">
          { editing ? post : btn}
        </div>
      </div>
    );
  }
}

NewPost.propTypes = {
  addThread: PropTypes.func.isRequired,
  btnText: PropTypes.string,
  path: PropTypes.string.isRequired
};
