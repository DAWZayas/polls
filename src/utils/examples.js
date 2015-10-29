import { getId } from './index';

const POLLS = [ 
  {
    id: getId(),
    title: 'Spanish Political Parties',
    entries: []
  },
  {
    id: getId(),
    title: 'Programming Languages',
    entries: []
  }
];

export default POLLS;