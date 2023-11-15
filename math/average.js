// Return the average of the provided numbers

function average(...nums) {
  return nums.reduce((acc, val) => acc + val, 0) / nums.length;
}

console.log(average(...[1, 2, 3]));
console.log(average(1, 2, 3));
