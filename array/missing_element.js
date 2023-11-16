// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.

function getMissingNumber(arr) {
  const n = arr.length;
  //Calculates the expected sum of a series of consecutive numbers
  //from 0 to n using the formula for the sum of an arithmetic series.
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

console.log(getMissingNumber([0, 1, 3, 4, 5, 6, 7, 8, 9])); //2
