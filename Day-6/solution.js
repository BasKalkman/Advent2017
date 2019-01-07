const fs = require('fs');

// const data = fs
//   .readFileSync('./input.txt', { encoding: 'utf8' })
//   .split('\t')
//   .map(Number);

const data = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5];
// const data = [0, 2, 7, 0];

const map = new Map();
let lastSeen = data.join();

while (!map.has(lastSeen)) {
  map.set(lastSeen, map.size);

  let max = Math.max(...data);
  let index = data.indexOf(max);
  data[index] = 0;

  for (let i = max; i > 0; i--) {
    data[++index % data.length]++;
  }

  lastSeen = data.join();
}

console.log('Part 1: ', map.size);
console.log('Part 2: ', map.size - map.get(lastSeen));
