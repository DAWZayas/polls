import React, { Component, PropTypes } from 'react';
import PollItem from './PollItem';

export default class PollList extends Component {

  constructor(props) {
    super(props);
  }

  handleAddButtonClick() {
    const { onAddPoll } = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddPoll(title);
    node.value = '';
  }

  render() {

    const { polls, onSelectPoll, onRemovePoll } = this.props;

    return (
      <div className="row">
        <div className="col-lg-6">
          <h3>Poll Title</h3>
          <ul className="list-group">
            {
              polls.map( (poll, index) =>  <PollItem key={index} poll={poll} onSelectPoll={onSelectPoll} onRemovePoll={onRemovePoll} /> )
            }
         </ul>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Pull Title" ref="title"/>
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}>Add Pull</button>
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
  onRemovePoll: PropTypes.func.isRequired,
  onSelectPoll:  PropTypes.func.isRequired
};

PollList.defaultProps = { 
  polls: []
};