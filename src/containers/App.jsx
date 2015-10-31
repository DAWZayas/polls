import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import NotificationsContainer from './NotificationsContainer';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1>Welcome to Poll App</h1>
      	<div className="row">
        	<div className="col-lg-1">
  	    		<Link to="/poll">Show Polls</Link>
  	    	</div>
  	    	<div className="col-lg-1">
  	    		<Link to="/">Hide Polls</Link>
  	    	</div>
          <div className="col-lg-1">
            <NotificationsContainer />
          </div>
  	    </div>
  	    {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};