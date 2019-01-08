const fs = require('fs');
const data = fs.readFileSync('./input.txt', { encoding: 'utf8' });

// const data = '{{{},{},{{}}}}'.split('');

let counter = 1;
let result = 0;
let currentType = 'group';
let garbage = [];

for (let i = 0; i < data.length; i++) {
  if (data[i] === '{' && currentType === 'group') {
    result += counter;
    counter++;
  }
  if (data[i] === '}' && currentType === 'group') {
    counter--;
  }
  if (data[i] === '<' && currentType === 'group') {
    currentType = 'garbage';
  }
  if (data[i] === '>' && currentType === 'garbage') {
    currentType = 'group';
  }
  if (data[i] === '!' && currentType === 'garbage') {
    i++;
  } else {
    garbage.push(data[i]);
  }
}

console.log('Part 1: ', result);
console.log('Part 2: ', garbage.length);
