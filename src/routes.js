import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import PollListContainer from './containers/PollListContainer';
import PollDetailsContainer from './containers/PollDetailsContainer';

export default (
  <Route path="/" component={App}>
  	<Route path="poll" component={PollListContainer} />
    <Route path="poll/:index" component={PollDetailsContainer} />
  </Route>
);