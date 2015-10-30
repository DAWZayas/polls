import { getId } from './index';

const POLLS = [ 
  {
    id: getId(),
    title: 'Spanish Political Parties'
  },
  {
    id: getId(),
    title: 'Programming Languages'
  }
];

export default POLLS;

export const entries = {
	[getId()]: {
		idPoll: POLLS[1].id,
		title: 'Java'	
	}
};