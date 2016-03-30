import uuid from 'node-uuid';

export function getId() {
  return uuid.v1();
}

export function imageExist(url) {
   const img = new Image();
   img.src = url;
   return img.height !== 0;
}
