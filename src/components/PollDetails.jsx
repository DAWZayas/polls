import React, { Component, PropTypes } from 'react';

export default class PollDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  handleRemoveButtonClick(idPoll, titlePoll) {
    this.props.removePoll(idPoll, titlePoll);
  }

  handleEditClick() {
    const node = this.refs.title;
    const { poll } = this.props;

    this.setState({
      editing: true
    });

    node.value = poll.title;
    setTimeout(() => node.focus(), 0);
    setTimeout(() => node.setSelectionRange(0, node.value.length), 0);
  }

  handleCancelClick() {
    this.setState({
      editing: false
    });
  }

  handleOkClick() {
    const node = this.refs.title;
    const { poll, editPollTitle } = this.props;

    this.setState({
      editing: false
    });

    editPollTitle(poll.id, node.value.trim());
  }

  render() {
    const { poll } = this.props;
    return (
      <div className="panel-heading">
          <h3>
            <span  className={`${this.state.editing ? 'hidden' : ''}`}>
              { poll.title }
              <span style={{'marginLeft': '20px'}} className="btn glyphicon glyphicon-edit" onClick={ () => this.handleEditClick() }/>
              <button onClick={() => this.handleRemoveButtonClick(poll.id, poll.title)} className="btn btn-warning glyphicon glyphicon-trash pull-right"></button>
            </span>
            <div className={`input-group ${this.state.editing ? '' : 'hidden'}`}>
              <input className="form-control" ref="title"/>
              <span className="input-group-btn">
                <button className="btn btn-danger" type="button" onClick={e => this.handleCancelClick(e)}><span className="glyphicon glyphicon-remove" /></button>
                <button className="btn btn-success" type="button" onClick={e => this.handleOkClick(e)}><span className="glyphicon glyphicon-ok" /></button>
              </span>
            </div>
          </h3>
      </div>
    );
  }
}

PollDetails.propTypes = {
  poll: PropTypes.object.isRequired,
  removePoll: PropTypes.func.isRequired,
  editPollTitle: PropTypes.func.isRequired
 };
