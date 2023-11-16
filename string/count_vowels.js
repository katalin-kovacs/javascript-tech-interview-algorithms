//Write a function to count the number of vowels in a given string.

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels("apple"));
