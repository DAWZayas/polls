import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PollItem extends Component {

  handleOnMouseOverListItem() {
  	const { onSelectPoll, poll } = this.props;
  	onSelectPoll(poll.id);
  }

  handleOnMouseOutListItem() {
  	const { onSelectPoll } = this.props;
  	onSelectPoll();
  }

  handleRemoveButtonClick(e) {
  	e.stopPropagation();
  	const { onRemovePoll, poll } = this.props;
    onRemovePoll(poll.id, poll.title);
  }

  render() {
  	const { poll } = this.props;
    return (
    	<li className={`list-group-item action-element ${poll.selected ? 'active' : ''}`} onMouseOut={ (e) => this.handleOnMouseOutListItem(e)} onMouseOver={ (e) => this.handleOnMouseOverListItem(e)}>
    		<div className="row">
    			<div className="col-lg-12">
            	{poll.title}
            	
            	<Link to={`/poll/${poll.id}`} style={{color: 'inherit', 'marginLeft': '20px'}}><span className={`glyphicon glyphicon-wrench ${poll.selected ? '' : 'hidden'}`} /></Link>
            	
                <span onClick={(e) => this.handleRemoveButtonClick(e)} className={`pull-right glyphicon glyphicon-trash ${poll.selected ? '' : 'hidden'}`}/>
                </div>
            </div>
    	</li>
    );
  }

}

PollItem.propTypes = {
  poll: PropTypes.object.isRequired,
  onSelectPoll:  PropTypes.func.isRequired,
  onRemovePoll: PropTypes.func.isRequired
};