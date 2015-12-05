import uuid from 'node-uuid';

export function getId() {
  return uuid.v1();
}
