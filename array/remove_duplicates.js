//Write a function to remove duplicate elements from an array.

function removeDuplicates(arr) {
  return [...new Set(arr)];
  //   return Array.from(new Set(arr));
}

console.log(removeDuplicates(["a", "a", "b", "c", 1, 2, 2, 3, 3, 4]));
