const fs = require('fs');
const lengths = fs
  .readFileSync('./input.txt', { encoding: 'utf8' })
  .split(',')
  .map(Number);

const arr = Array.from(Array(256), (x, index) => index);

// const lengths = [3, 4, 1, 5];

// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(i);
// }

let skipSize = 0;
let currentLocation = 0;

function hash(len) {
  let rotate = [];
  for (let i = currentLocation; i < currentLocation + len; i++) {
    rotate.push(arr[i % arr.length]);
  }
  rotate.reverse();
  for (let i = 0, j = currentLocation; i < len; j++, i++) {
    arr[j % arr.length] = rotate[i];
  }
  currentLocation = (currentLocation + len + skipSize) % arr.length;
  skipSize++;
}

lengths.forEach(length => hash(length));

let result = arr[0] * arr[1];
console.log('Part 1: ', result);

// Part 2
