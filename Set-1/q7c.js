exports.printPattern = (n) => {
  let k = 0,
    count = 0,
    count1 = 0;

  for (let i = 1; i <= n; ++i) {
    for (let space = 1; space <= n - i; ++space) {
      process.stdout.write('  ');
      ++count;
    }

    while (k != 2 * i - 1) {
      if (count <= n - 1) {
        process.stdout.write(k + 1 + ' ');
        ++count;
      } else {
        ++count1;
        process.stdout.write(k - 2 * count1 + 1 + ' ');
      }

      ++k;
    }
    count1 = count = k = 0;
    console.log();
  }
  return 'Pattern printed successfully';
};
