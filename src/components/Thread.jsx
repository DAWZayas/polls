import React, { Component, PropTypes } from 'react';
import NewPost from './NewPost';
import { imageExist } from '../utils';

export default class Thread extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.registerListeners();
  }

  componentWillUnmount() {
    this.props.unregisterListeners();
  }

  render() {
    const { thread, path, auth } = this.props;
    const post = thread => <div className="row" key={thread.id}>
                            <div className="col-md-1"></div>
                            <div className="col-md-6">
                              { thread.text }
                              <img title={thread.owner || 'anonymous'} src={ imageExist(thread.picture) ? thread.picture : 'img/user.png'} width="25x" height="25px"/>
                              {auth.authenticated ? <NewPost {...this.props} btnText="Answer" path={ (path || 'thread') + '/' + thread.id + '/thread' }/> : null}
                              { thread.thread ?
                                  <Thread {...this.props} thread={thread.thread} path={(path || 'thread') + '/' + thread.id + '/thread'} /> :
                                  null
                              }
                            </div>
                         </div>;
    return (
        <div>
          {
            Object.keys(thread).map( key => post(Object.assign({}, {id: key}, thread[key])))
          }
        </div>
    );
  }
}

Thread.propTypes = {
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
  thread: PropTypes.object.isRequired,
  path: PropTypes.string,
  auth: PropTypes.object.isRequired
};
