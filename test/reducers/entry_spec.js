import {expect} from 'chai';

import { addEntry }  from '../../src/actions';
import entryReducer from '../../src/reducers/entry';
import { polls } from '../../src/utils/examples';

describe('reducer entry tests', () => {

  describe('addEntry', () => {

    it('should add one entry to an empty entries state', () => {
      const nextState = entryReducer(undefined, addEntry(polls[0].id, 'TV Series'));
      expect(Object.keys(nextState).length).to.equal(1);
      Object.values(nextState).forEach( entry => {
        expect(entry.title).to.equal('TV Series');
        expect(entry.idPoll).to.equal(polls[0].id);
      });
    });
  });
});