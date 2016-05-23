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

  handleVoteClick(idPoll, idEntry, lastVote) {
    this.props.voteEntry(idPoll, idEntry, lastVote);
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

  hasVoted(user, entry) {
    return 'voters' in entry && user in entry.voters;
  }

  lastVote(user, entries) {
    return Object.keys(entries).reduce( (last, id) => {
      const entry = entries[id];
      return 'voters' in entry && user in entry.voters ? id : last;
    }, null);
  }

  render() {
    const { poll, canVote, user } = this.props;
    const entries = poll.entries || {};
    const total = this.totalVotes(entries);
    const lastVote = this.lastVote(user, entries);
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
                    <li className={this.hasVoted(user, entries[id]) ? 'list-group-item stripe' : 'list-group-item'} key={index}>
                      { entries[id].title }
                      { canVote && !this.hasVoted(user, entries[id]) ? <span onClick={ () => this.handleVoteClick(poll.id, id, lastVote) } className="action-element glyphicon glyphicon-arrow-up"/> : null }
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
  user: PropTypes.string,
  canVote: PropTypes.bool.isRequired,
  voteEntry: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired
 };
