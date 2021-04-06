exports.printPattern = (n) => {
  n = 2 * n - 1;
  let k = 0;
  for (let i = 1; i <= n; i++) {
    if (i <= n / 2 + 1) k++;
    else k--;

    for (let j = 1; j <= n + 1; j++) {
      if (j <= k) process.stdout.write('* ');
      else if (n - j < k - 1) process.stdout.write('* ');
      else process.stdout.write('  ');
    }
    console.log();
  }
  return 'Pattern printed successfully';
};
