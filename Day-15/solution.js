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
