exports.printPattern = (n) => {
  for (let i = 1; i <= n + 1; i++) {
    let k = 1,
      j = 1,
      inc = 0;
    if (i % 2) {
      for (; j < i / 2; j++) {
        process.stdout.write(k + ' ');
        k += i - 2 - inc;
      }
      if (i > 3) k--;
      process.stdout.write(k + ' ');
      j++;
      k -= i - 2 - inc;
      for (; j <= i; j++) {
        process.stdout.write(k + ' ');
        k -= i - 2 - inc;
      }
    } else {
      for (; j < i / 2; j++) {
        process.stdout.write(k + ' ');
        k += i - 2 + inc;
      }
      if (i > 4) k++;
      process.stdout.write(k + ' ');
      j++;
      if (j < i) {
        process.stdout.write(k + ' ');
        j++;
      }
      if (i > 4) k--;
      k -= i - 2 + inc;
      for (; j <= i; j++) {
        process.stdout.write(k + ' ');
        k -= i - 2 + inc;
      }
    }

    console.log();
    // console.log(inc);
    if (i > 2 && i % 2 == 0) inc++;
  }
  return 'Pattern printed successfully';
};
