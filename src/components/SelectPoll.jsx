import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SelectPoll extends Component {

  constructor(props) {
    super(props);
    this.state = { filter: '' };
  }

  handleOnChangeTitle() {
    const node = this.refs.title;
    const title =  node.value;
    this.setState({ filter: title});
  }

  filterPolls(polls, filter) {
    return !filter || filter.length < 3 ? [] : polls.filter( poll => new RegExp(filter, 'i').test(poll.title) );
  }

  render() {
    const { polls } = this.props;
    const filterredPolls = this.filterPolls(polls, this.state.filter);
    const noResults = this.state.filter.length >= 3 && filterredPolls.length === 0 ? 'No results' : null;
    
    return (
      <div className="row">
        <div className="col-md-6">          
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Pull Title" ref="title" onChange={e => this.handleOnChangeTitle(e)}/>
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.handleOnChangeTitle(e)}><span className="glyphicon glyphicon-search" /></button>
            </span>
          </div>
          <br/>
          <ul className="list-group">
            {
              filterredPolls.map( (poll, index) =>  <li className="list-group-item" key={index}><Link to={`/vote/${poll.id}`}>{poll.title}</Link></li> )
            }
         </ul>
         <h4>{noResults}</h4>
        </div> 
      </div> 
    );
  }
}

SelectPoll.propTypes = {
  polls: PropTypes.array
};

SelectPoll.defaultProps = {
  polls: []
};