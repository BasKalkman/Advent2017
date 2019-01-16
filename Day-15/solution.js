const genAfactor = 16807;
const genBfactor = 48271;
const genAstart = 516;
const genBstart = 190;
const divider = 2147483647;

// Example
// const genAstart = 65;
// const genBstart = 8921;

// Results
let count = 0;

// Intermediate values
let valueA = genAstart;
let valueB = genBstart;

// Run
/*
for (let i = 0; i < 4e7; i++) {
  if (i % 1e6 === 0) {
    console.log(i);
  }

  valueA = (valueA * genAfactor) % divider;
  valueB = (valueB * genBfactor) % divider;

  // Make binary
  let aBinary = valueA.toString(2);
  let bBinary = valueB.toString(2);

  while (aBinary.length < 32) {
    aBinary = '0' + aBinary;
  }
  while (bBinary.length < 32) {
    bBinary = '0' + bBinary;
  }

  // Check last 16
  if (aBinary.substring(16, 32) === bBinary.substring(16, 32)) {
    count++;
  }
}

console.log('Part 1: ', count);
*/

// Part 2
let score = 0;
for (let i = 0; i < 5e6; i++) {
  do {
    valueA = (valueA * genAfactor) % divider;
  } while (valueA % 4 != 0);
  do {
    valueB = (valueB * genBfactor) % divider;
  } while (valueB % 8 != 0);

  // Bitwise - Treats number as 32 bit int, 0xffff compares with 16bit int and tosses the rest.
  if ((valueA & 0xffff) === (valueB & 0xffff)) {
    score++;
  }
}

console.log(score);
