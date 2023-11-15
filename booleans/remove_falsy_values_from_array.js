// Remove falsy values from a provided array

function removeFalsy(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]));
//[ 1, 2, 3, 'a', 's', 34 ]
