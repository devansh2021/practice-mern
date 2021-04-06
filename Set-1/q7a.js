exports.printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) process.stdout.write('* ');
    console.log();
  }
  return 'Pattern printed successfully';
};
