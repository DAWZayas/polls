import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import App from './containers/App';
import PollListContainer from './containers/PollListContainer';
import PollDetailsContainer from './containers/PollDetailsContainer';
import NotificationsDetailContainer from './containers/NotificationsDetailContainer';
import SelectPollContainer from './containers/SelectPollContainer';
import PollVoteContainer from './containers/PollVoteContainer';
import { SIGN_IN_PATH } from './config';
import SignIn from './containers/SignIn';

export default () => (
  <Route path="/" component={App}>
    <Route path="poll" component={PollListContainer} />
    <Route path="poll/:idPoll" component={PollDetailsContainer} />
    <Route path="notifications" component={NotificationsDetailContainer} />
    <Route path="vote" component={SelectPollContainer} />
    <Route path="vote/:idPoll" component={PollVoteContainer} />
    <Route path={SIGN_IN_PATH} component={SignIn} />
    <IndexRoute component={PollListContainer}/>
    <Redirect path="*" to="/PollListContainer" />
  </Route>
);
