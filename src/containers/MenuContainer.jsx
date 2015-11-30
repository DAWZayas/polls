import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NotificationsContainer from './NotificationsContainer';
import MenuItem from '../components/MenuItem';


class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Poll App</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <MenuItem href="/poll" { ...this.props }>My Polls</MenuItem>
              <MenuItem href="/vote" { ...this.props }>Vote</MenuItem>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NotificationsContainer { ...this.props } />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    active: state.menu.active
  };
}

export default connect(
  mapStateToProps
)(Menu);