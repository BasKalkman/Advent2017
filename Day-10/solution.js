const fs = require('fs');
const lengths = fs
  .readFileSync('./input.txt', { encoding: 'utf8' })
  .split(',')
  .map(Number);

let arr = Array.from(Array(256), (x, index) => index);

// const lengths = [3, 4, 1, 5];

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
const bytes = fs
  .readFileSync('./input.txt', { encoding: 'utf8' })
  .split('')
  .map(item => item.charCodeAt())
  .map(Number);

// Setup new input
arr = Array.from(Array(256), (x, index) => index);
let salt = [17, 31, 73, 47, 23];
bytes.push(...salt);
skipSize = 0;
currentLocation = 0;

// Hashing
for (let i = 0; i < 64; i++) {
  bytes.forEach(item => hash(item));
}
// To dense hash
let denseHash = [];
while (arr.length > 0) {
  let temp = arr.splice(0, 16);
  let reduced = temp.reduce((a, c) => a ^ c);
  denseHash.push(reduced);
}

// To Hexadecimal
