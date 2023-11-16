//Given a string, find the first non-repeating character.

function firstNonRepeatingChar(str) {
  //if case matters, convert str to uppercase or lowercase
  // const str = str.toLowerCase();

  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("aabBBBc")); //b, if the case does not matter
console.log(firstNonRepeatingChar("00012222")); //1
console.log(firstNonRepeatingChar("000abbc")); //a
console.log(firstNonRepeatingChar("aa1bbc")); //1
