'use strict';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserMenuItem = (props) => {

    const { auth, signOut } = props;
    const { settings } = auth;

    return (
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" data-toggle="dropdown" style={{borderRadius: 15}} type="button">
            <img src={ (settings  && settings.picture) || 'img/user.png'} width="25x" height="25px"/>
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/poll">My Polls</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li role="separator" className="divider"></li>
            <li><a role="button" onClick={ () => signOut() }>Log out</a></li>
          </ul>
        </div>

    );
};

UserMenuItem.propTypes = {
  auth: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
};

export default UserMenuItem;
