const readlineSync = require('readline-sync');
const gcd = (a, b) => {
  if (b == 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};
const a = readlineSync.question(
  'Find GCD of two numbers just insert first number ?\n'
);
const b = readlineSync.question('second number?\n');
console.log(gcd(a, b));
