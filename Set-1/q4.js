console.log('let us print even numbers after odd times jump upto 50');
let jump = -1;
let temp = jump;
for (let i = 2; i <= 50; i += 2) {
  if (temp <= 0) {
    process.stdout.write(i + ' ');
    jump += 2;
    temp = jump;
  } else temp--;
}
