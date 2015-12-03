import React, { Component, PropTypes } from 'react';
import PollItem from './PollItem';

export default class PollList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addDisabled: true
    };
  }

  handleAddButtonClick() {
    const { onAddPoll } = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddPoll(title);
    node.value = '';
    this.setState({
      addDisabled: true
    });
  }

  handleOnChangeTitle() {

    const node = this.refs.title;
    const title =  node.value.trim();

    this.setState({
      addDisabled: title.length === 0
    });
  }

  handleOnTitleKeyDown(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY && !this.state.addDisabled) {
      this.handleAddButtonClick();
    }
  }

  render() {

    const { polls, onRemovePoll } = this.props;

    return (
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {
              polls.map( (poll, index) =>  <PollItem key={index} poll={poll} onRemovePoll={onRemovePoll} /> )
            }
         </ul>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Pull Title" ref="title" onKeyDown={e => this.handleOnTitleKeyDown(e)} onChange={e => this.handleOnChangeTitle(e)}/>
            <span className="input-group-btn">
              <button disabled={this.state.addDisabled} className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-ok-sign" /></button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

PollList.propTypes = {
  polls: PropTypes.array,
  onAddPoll: PropTypes.func.isRequired,
  onRemovePoll: PropTypes.func.isRequired
};

PollList.defaultProps = {
  polls: []
};
