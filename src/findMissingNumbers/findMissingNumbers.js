const findMissingNumbers = (arr, n) => {
  const expectedSum = (n * (n + 1)) / 2;

  const expectedSumSquares = (n * (n + 1) * (2 * n + 1)) / 6;

  let actualSum = null; 
  let actualSumSquares = null; 

  for (let num of arr) {
    actualSum += num;
    actualSumSquares += num * num;
  }

  // Calculate the differences
  const differenceSum = expectedSum - actualSum;
  const differenceSumSquared = expectedSumSquares - actualSumSquares;

  // Solving the equations
  // x + y = differenceSum
  // x^2 + y^2 = differenceSumSquared
  // y = differenceSum - x

  const a = 2;
  const b = -2 * differenceSum;
  const c = differenceSum * differenceSum - differenceSumSquared;

  const discriminant = Math.sqrt(b * b - 4 * a * c);
  const x = (-b + discriminant) / (2 * a);
  const y = differenceSum - x;

  return [y, x];
}

module.exports = { findMissingNumbers };
