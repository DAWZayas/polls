import React, { PropTypes } from 'react';
import NewPost from './NewPost';
import Thread from './Thread';

const Forum = (props) => {
	const { auth, thread } = props;
    return (
        <div>
          {auth.authenticated ? <NewPost {...props} path="thread"/> : Object.keys(thread).length === 0 && 'No posts' }
          <Thread {...props}/>
        </div>
    );
};

Forum.propTypes = {
  auth: PropTypes.object.isRequired,
  thread: PropTypes.object
};

export default Forum;
