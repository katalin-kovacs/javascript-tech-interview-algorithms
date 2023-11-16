//greatest common divisor (GCD) of an array of integers

function findGCD(arr) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  return arr.reduce((a, b) => gcd(a, b));
}

// function findGCD(arr) {
//     const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

//     if (!Array.isArray(arr) || arr.length === 0) {
//       // Handle invalid input (not an array or empty array)
//       return null;
//     }

//     let result = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//       result = gcd(result, arr[i]);

//       if (result === 1) {
//         // If GCD becomes 1, no need to continue, as further iterations won't change the result.
//         break;
//       }
//     }

//     return result;
//   }

console.log(findGCD([12, 18, 24])); //6
