//Write a function to flatten a nested array.

function flattenArray(arr) {
  return arr.reduce(
    (flat, current) =>
      flat.concat(Array.isArray(current) ? flattenArray(current) : current),
    []
  );
}

console.log(
  flattenArray([
    ["a", "b"],
    [0, [1, 2]],
  ])
);
