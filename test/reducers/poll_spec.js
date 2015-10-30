import {expect} from 'chai';

import { setPolls, addPoll }  from '../../src/actions';
import pollReducer from '../../src/reducers/poll';
import reducer from '../../src/reducers';
import { polls } from '../../src/utils/examples';

describe('reducer poll tests', () => {

  describe('setPolls', () => {

    it('sets polls to the state using poll reducer', () => {
      const nextState = pollReducer(undefined, setPolls(polls));
      expect(nextState).to.eql(polls);
    });

    it('sets polls to the state using app reducer', () => {
      const nextState = reducer(undefined, setPolls(polls));
      expect(nextState.polls).to.eql(polls);
    });

  });

  describe('addPoll', () => {

    it('should add a poll to an empty polls state', () => {
      const nextState = pollReducer(undefined, addPoll('TV Series'));
      expect(nextState.length).to.equal(1);
      expect(nextState[0].title).to.equal('TV Series');
    });

    it('should add a poll to a non empty polls state', () => {
      const nextState = pollReducer(polls, addPoll('TV Series'));
      expect(nextState.length).to.equal(polls.length + 1);
      expect(nextState[polls.length].title).to.equal('TV Series');
    });

  });


});