const readlineSync = require('readline-sync');
const a = readlineSync.question(
  'Enter number to determine number of digits in that number ?\n'
);
const countDigits = (a) => {
  if (a < 1) return 0;
  return 1 + countDigits(a / 10);
};
console.log(countDigits(a));
