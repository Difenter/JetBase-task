# Finding two missing numbers in a sorted array of numbers

## Problem Statement
Given a sorted sequence of numbers ranging from 1 to \( N \) (where \( N \) can be very large, up to 10 billion), two numbers are missing from this sequence. The task is to find these two missing numbers using an optimal approach.

## Solution Approach
We will use the mathematical properties of the sequence, specifically leveraging the sum and the sum of squares of the numbers in the sequence. This approach involves:

1. Calculating the expected sum of the sequence if no numbers were missing.
2. Calculating the expected sum of squares of the sequence if no numbers were missing.
3. Comparing these expected values with the actual sum and sum of squares of the given sequence to find the two missing numbers.

### Implementation

```javascript
const findMissingNumbers = (arr) => {
  const n = arr.at(-1)
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

// Example usage
const arr = [1, 2, 4, 5, 6, 7, 8, 10]; // Example with 2 missing numbers
console.log(findMissingNumbers(arr)); // [3, 9]
```

## Computational Complexity

### Time Complexity

- **O(N)**: The algorithm iterates through the array once to compute the actual sum and the sum of squares. This makes the time complexity linear with respect to the number of elements in the array. Thus, for a sequence of \( N \) elements, the time complexity is \( O(N) \).

### Space Complexity

- **O(1)**: The algorithm uses a constant amount of extra space for storing intermediate results. The space complexity is independent of the size of the input array, making it \( O(1) \). This constant space is used for variables that store the sum and sum of squares, as well as the results of the calculations.

## Testing

For testing the function, the `jest` library was used. Several test cases have been implemented to ensure the correctness of the solution. To execute the tests, run the following command:

```
npm run test
```