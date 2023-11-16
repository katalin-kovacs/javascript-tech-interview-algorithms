// Print numbers from 1 to N,
// but for multiples of 3 print "Fizz" and
// for multiples of 5 print "Buzz."
// For numbers which are multiples of both three and five, print "FizzBuzz."

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
  }
}

fizzbuzz(15);

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
