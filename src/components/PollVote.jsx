import React, { Component, PropTypes } from 'react';

const progressContex = [
  'progress-bar-success',
  'progress-bar-info',
  'progress-bar-warning',
  'progress-bar-danger'
];

export default class PollVote extends Component {

  constructor(props) {
    super(props);
  }

  handleVoteClick(idEntry) {
    this.props.onVoteEntryClick(idEntry);
  }

  totalVotes(entries) {
    return entries.reduce( (total, entry) => total + entry.votes, 0 );
  }

  createProgressBar(entry, totalVotes, index) {
    return (
      <div className="progress">
        <div className={ `progress-bar ${ progressContex[index % progressContex.length] } progress-bar-striped` } role="progressbar" style={{'width': entry.votes * 100 / (totalVotes || Infinity) + '%'}}>
          { entry.votes || 0 }
        </div>
      </div>
    );
  }

  render() {
    const { poll, entries } = this.props;
    const total = this.totalVotes(entries);
    return (
      <div className="panel-heading">
          <h4>
            <div>
              Poll: { poll.title }
            </div>
          </h4>
           <div className="col-md-6">
          <div className="panel-body">
            <h4>Entries</h4>
            <ul className="list-group">
              {
                entries.map( (entry, index) =>
                  <li className="list-group-item" key={index}>
                    { entry.title }
                    <span onClick={ () => this.handleVoteClick(entry.id) } className="action-element glyphicon glyphicon-arrow-up"/>
                    <br/>
                    { this.createProgressBar(entry, total, index) }
                  </li>
                )
              }
           </ul>
        </div>
        </div>
      </div>
    );
  }
}

PollVote.propTypes = {
  poll: PropTypes.object.isRequired,
  entries: PropTypes.array,
  onVoteEntryClick: PropTypes.func.isRequired
 };
