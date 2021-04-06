exports.printPattern = (n) => {
  let i = 0,
    j = 0;
  for (i = n; i >= 1; i--) {
    // First inner part of upper half
    for (j = n; j > i; j--) {
      process.stdout.write(j + ' ');
    }
    // Second inner part of upper half
    for (j = 1; j <= i * 2 - 1; j++) {
      process.stdout.write(i + ' ');
    }

    // Third inner part of upper half
    for (j = i + 1; j <= n; j++) {
      process.stdout.write(j + ' ');
    }

    console.log();
  }

  // Second lower half of the pattern
  for (i = 1; i < n; i++) {
    // First inner part of lower half
    for (j = n; j > i; j--) {
      process.stdout.write(j + ' ');
    }

    // Second inner part of lower half
    for (j = 1; j <= i * 2 - 1; j++) {
      process.stdout.write(i + 1 + ' ');
    }

    // Third inner part of lower half
    for (j = i + 1; j <= n; j++) {
      process.stdout.write(j + ' ');
    }

    console.log();
  }

  return 'Pattern printed successfully';
};
