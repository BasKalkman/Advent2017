const fs = require('fs');

const moves = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split(',');
const dancers = 'abcdefghijklmnop'.split('');

// const dancers = 'abcde'.split(''); // Example
// const moves = 's1,x3/4,pe/b'.split(','); // Example

// Part 1
moves.forEach(instruction => {
  switch (instruction[0]) {
    case 's':
      // switch`
      let num = parseInt(instruction.match(/\d+/g)[0]);
      let position = dancers.length - num;
      dancers.unshift(...dancers.splice(position, num));
      break;
    case 'x':
      // exchange
      let posArr = instruction.match(/\d+/g).map(Number);
      let tempExchange = dancers[posArr[0]];
      dancers[posArr[0]] = dancers[posArr[1]];
      dancers[posArr[1]] = tempExchange;
      break;
    case 'p':
      // partner
      let tempPartner = instruction.split('');
      let partner1 = tempPartner[1];
      let partner2 = tempPartner[3];
      let index1 = dancers.indexOf(partner1);
      let index2 = dancers.indexOf(partner2);

      dancers[index1] = partner2;
      dancers[index2] = partner1;

      break;
    default:
      console.log('should not hit');
  }
});

console.log('Part 1: ', dancers.join(''));
