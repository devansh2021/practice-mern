var readlineSync = require('readline-sync');
console.log(
  'Hey! this program will calculate Simple Interest accumalated for you'
);
var amount = readlineSync.question('Please insert amount in Rs. ? ');
var rate = readlineSync.question('Please insert  rate in % per annum? ');
var time = readlineSync.question('Please insert  time in years? ');

var interest_Accumulated = (amount * rate * time) / 100;
console.log(interest_Accumulated);
