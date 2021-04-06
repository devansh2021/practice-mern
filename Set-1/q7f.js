exports.printPattern = (n) => {
  let spaces = n - 1;
  let stars = 1;
  for (let i = 1; i <= 2 * n - 1; i++) {
    for (let j = 1; j <= spaces; j++) {
      process.stdout.write('  ');
    }
    for (let k = 1; k <= stars; k++) {
      process.stdout.write('* ');
    }
    if (i < n) {
      spaces = spaces - 1;
      stars = stars + 2;
    }
    if (i >= n) {
      spaces = spaces + 1;
      stars = stars - 2;
    }
    console.log();
  }
  return 'Pattern printed successfully';
};
