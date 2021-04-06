var readlineSync = require('readline-sync');

var credits = readlineSync.question(
  'May I have your credits of a Code for Cause Campus leader ? '
);

if (7500 <= credits) {
  console.log('Tera leader');
} else if (6000 <= credits && credits < 7500) {
  console.log('Gega leader');
} else if (4500 <= credits && credits < 6000) {
  console.log('Mega leader');
} else if (credits < 4500) {
  console.log('Rising star');
}
