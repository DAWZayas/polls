import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PollItem extends Component {

  handleRemoveButtonClick(e) {
    const { onRemovePoll, poll } = this.props;
    e.stopPropagation();
    onRemovePoll(poll.id, poll.title);
  }

  render() {
    const { poll } = this.props;
    return (
      <li className="list-group-item action-element" >
          <div className="row">
            <div className="col-lg-12">
              <Link to={`/poll/${poll.id}`} style={{color: 'inherit', textDecoration: 'inherit'}}>{poll.title}<span style={{'marginLeft': '20px'}} className={'glyphicon glyphicon-wrench action-icon'}/></Link>
              <span onClick={(e) => this.handleRemoveButtonClick(e)} className={'pull-right glyphicon glyphicon-trash action-icon'}/>
          </div>
        </div>
      </li>
    );
  }

}

PollItem.propTypes = {
  poll: PropTypes.object.isRequired,
  onRemovePoll: PropTypes.func.isRequired
};
