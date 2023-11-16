// How to find the second largest value in am array

function secondLargest(arr) {
  return arr.sort((a, b) => b - a).slice(1, 2);
}

console.log(secondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9])); //[8]
