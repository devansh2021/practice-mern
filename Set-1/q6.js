const readlineSync = require('readline-sync');
let a = readlineSync.question('Enter a number to reverse ?\n');
let reverse = function (a) {
  let b = a.toString().split('').reverse().join('');
  b = parseFloat(b);
  b = b * Math.sign(a);
  return b;
};
console.log(reverse(a));
