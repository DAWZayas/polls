import React, { Component, PropTypes } from 'react';
import PollItem from './PollItem';
import { Link } from 'react-router';

export default class PollList extends Component {

  constructor(props) {
    super(props);
  }

  handleAddButtonClick() {
    const { onAddPullClick } = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddPullClick(title);
    node.value = '';
  }

  render() {

    const { polls } = this.props;

    return (
      <div className="row">
        <div className="col-lg-6">
          <h3>Poll Title</h3>
          <ul className="list-group">
            {
              polls.map( (poll, index) => <PollItem key={index} poll={poll}><Link to={`/poll/${index}`}>{poll.title}</Link></PollItem> )
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
  onAddPullClick: PropTypes.func.isRequired
};

PollList.defaultProps = { 
  polls: []
};