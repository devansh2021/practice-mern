const readlineSync = require('readline-sync');
let i = readlineSync.question('Type which pattern to print a, b, c...?\n');
var a = require('./q7' + i);
console.log(a.printPattern(5));
