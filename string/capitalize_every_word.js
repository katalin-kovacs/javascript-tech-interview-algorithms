// Capitalize the first letter of every word in a given string

function capitalize(str) {
  return str
    .split(" ")
    .map(([char, ...rest]) => char.toUpperCase() + rest.join(""))
    .join(" ");
}

// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

console.log(capitalize("capitalize the first letter of every word"));
console.log(capitalize("capitalize ! first letter of every word."));
