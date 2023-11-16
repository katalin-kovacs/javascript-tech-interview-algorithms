// Reverse an integer
// 51 => 15

function reverseInt(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

console.log(reverseInt(51));
