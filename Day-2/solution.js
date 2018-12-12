const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\r\n');

// Part 1
let checkSum = 0;

input.forEach(arr => {
  let check = arr.split('\t').map(item => {
    let num = Number(item);
    return num;
  });

  let min = Math.min(...check);
  let max = Math.max(...check);

  checkSum += max - min;
});

console.log('Answer part 1: ', checkSum);

// Part 2
