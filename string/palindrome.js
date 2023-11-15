// Check that a string is a palindrome or not
// "abba" => true, "abcde" => false

function palindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(palindrome("abba"));
console.log(palindrome("abcde"));
