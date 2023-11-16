// Determine if two strings are anagrams.

function anagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(anagram("abc", "cab")); //true
console.log(anagram("abc", "aaa")); //false
