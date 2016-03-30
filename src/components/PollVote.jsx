import React, { Component, PropTypes } from 'react';
import Spinner from './Spinner';

const progressContex = [
  'progress-bar-success',
  'progress-bar-info',
  'progress-bar-warning',
  'progress-bar-danger'
];

export default class PollVote extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    this.props.registerListeners(this.props.params);
  }

  componentWillReceiveProps() {
    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.props.unregisterListeners(this.props.params);
  }

  handleVoteClick(idPoll, idEntry) {
    this.props.voteEntry(idPoll, idEntry);
  }

  totalVotes(entries) {
    return Object.keys(entries).reduce( (total, id) => total + entries[id].votes, 0 );
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
    const { poll } = this.props;
    const entries = poll.entries || {};
    const total = this.totalVotes(entries);
    const contents = this.state.loading ? <Spinner /> : <div>
        <div className="panel-heading">
            <h4>
              <div>
                Poll: { poll.title }
              </div>
            </h4>
             </div>
            <div className="panel-body">
              <h4>Entries</h4>
              <ul className="list-group">
                {
                  Object.keys(entries).map( (id, index) =>
                    <li className="list-group-item" key={index}>
                      { entries[id].title }
                      { poll.state === 'unlocked' ? <span onClick={ () => this.handleVoteClick(poll.id, id) } className="action-element glyphicon glyphicon-arrow-up"/> : null }
                      <br/>
                      { this.createProgressBar(entries[id], total, index) }
                    </li>
                  )
                }
             </ul>
        </div>
      </div>;
    return (
      <div className="panel panel-default">
        { contents }
      </div>
    );
  }
}

PollVote.propTypes = {
  poll: PropTypes.object.isRequired,
  voteEntry: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired
 };
