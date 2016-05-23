import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Spinner from './Spinner';

export default class MyVotes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.props.registerListeners('myVotes');
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;

    if (!nextProps.auth.authenticated) {
      history.replaceState(null, '/');
    }

    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.props.unregisterListeners('myVotes');
  }

  render() {

    const { polls } = this.props;
    const noResults = polls.length === 0 ? 'No results' : null;
    const contents = this.state.loading ?
      <Spinner /> :
      (
        <ul className="list-group">
        {
          polls.map( (poll, index) =>
                <li className="list-group-item" key={index}><Link to={`/vote/${poll.id}`}>{poll.title}</Link></li>
          )
        }
        </ul>
      );

    return (
      <div className="row">
        <div className="col-md-6">
          { contents }
          <h4>{ noResults }</h4>
        </div>
      </div>
    );
  }
}

MyVotes.propTypes = {
  polls: PropTypes.array,
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

MyVotes.defaultProps = {
  polls: []
};
