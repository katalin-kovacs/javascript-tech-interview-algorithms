// Count the occurrences of a value in an array

function occurrences(arr, val) {
  return arr.reduce((acc, cur) => (cur === val ? acc + 1 : acc), 0);
}

console.log(occurrences([1, 1, 2, 1, 2, 3], 1)); //3
console.log(occurrences([1, "j", 2, "j", 2, 3], "j")); //2
