const { findMissingNumbers } = require('./findMissingNumbers');

test('Find the missing numbers 3 and 4 in a small range', () => {
  const arr = [1, 2, 5];
  const result = findMissingNumbers(arr);
  expect(result.sort((a, b) => a - b)).toEqual([3, 4]);
});

test('Find the missing numbers 2 and 7 in a medium range', () => {
  const arr = [1, 3, 4, 5, 6, 8, 9, 10];
  const result = findMissingNumbers(arr);
  expect(result.sort((a, b) => a - b)).toEqual([2, 7]);
});

test('Find missing numbers in a large range', () => {
  let lastElement = 10000;
  let sequence = Array.from({length: lastElement}, (_, i) => i + 1);

  sequence.splice(1, 1);
  sequence.splice(2, 1);
  const result = findMissingNumbers(sequence);
  expect(result.sort((a, b) => a - b)).toEqual([2, 4]);
});
