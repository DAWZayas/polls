import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SelectPoll extends Component {

  constructor(props) {
    super(props);
  }

  handleOnChangeTitle() {
    const node = this.refs.title;
    const title =  node.value;
    this.props.pollSearch(title);
  }

  render() {
    const { polls } = this.props;
    const noResults = polls.length === 0 ? 'No results' : null;
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
              polls.map( (poll, index) =>  <li className="list-group-item" key={index}><Link to={`/vote/${poll.id}`}>{poll.title}</Link></li> )
            }
         </ul>
         <h4>{ noResults }</h4>
        </div>
      </div>
    );
  }
}

SelectPoll.propTypes = {
  polls: PropTypes.array,
  pollSearch: PropTypes.func.isRequired
};

SelectPoll.defaultProps = {
  polls: []
};
