import { getId } from './index';

export const polls = [ 
  {
    id: getId(),
    title: 'Spanish Political Parties'
  },
  {
    id: getId(),
    title: 'Programming Languages'
  }
];

export const entries = {
	0: {
    id: '0',
		idPoll: polls[1].id,
		title: 'Java'	
	},
  1: {
    id: '1',
    idPoll: polls[1].id,
    title: 'JavaScript' 
  },
  2: {
    id: '2',
    idPoll: polls[1].id,
    title: 'PHP' 
  },
  3: {
    id: '3',
    idPoll: polls[1].id,
    title: 'C#' 
  },
  4: {
    id: '4',
    idPoll: polls[1].id,
    title: 'Python' 
  },
  5: {
    id: '5',
    idPoll: polls[1].id,
    title: 'Ruby' 
  },
  6: {
    id: '6',
    idPoll: polls[1].id,
    title: 'Haskell' 
  },
  7: {
    id: '7',
    idPoll: polls[0].id,
    title: 'PP' 
  },
  8: {
    id: '8',
    idPoll: polls[0].id,
    title: 'C\'s' 
  },
  9: {
    id: '9',
    idPoll: polls[0].id,
    title: 'Podemos' 
  },
  10: {
    id: '10',
    idPoll: polls[0].id,
    title: 'PSOE' 
  }
};



export const initialState = {
  polls, entries
};