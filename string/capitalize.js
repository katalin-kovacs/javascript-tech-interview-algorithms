// Capitalize the first letter of a string

// function capitalize(str) {
//   const [first, ...rest] = str;
//   return first.toUpperCase() + rest.join("");
// }

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");

console.log(capitalize("apple"));
