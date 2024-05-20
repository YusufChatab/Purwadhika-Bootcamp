// ● Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// ● Example :
// ○ Input : AB
// ○ Output : 28

function excelToNumber(columnTitle) {
  result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    let charValue = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;

    result = result * 26 + charValue;
  }
  return result;
}

console.log("A".charCodeAt(0));

console.log(excelToNumber("ABC"));

// Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.
// ● Example 1:
// ○ Input: nums = [2,2,1]
// ○ Output: 1
// ● Example 2:
// ○ Input: nums = [4,1,2,1,2]
// ○ Output: 4

function findSingleNumber(nums) {
  let result = 0;
  for (let i = 0; i <= nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

// console.log(findSingleNumber([1, 2, 3, 1]));

// console.log(findSingleNumber([4, 1, 2, 1, 2]));

// console.log(7 ^ 1);

// ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false

function anagramWord(str1, str2) {
  let anagram1 = str1.split("").sort().join("");
  let anagram2 = str2.split("").sort().join("");

  return anagram1 === anagram2;
}

console.log(anagramWord("anagram", "nagaram"));
console.log(anagramWord("rat", "car"));

var addDigits = function (num) {
  return 1 + ((num - 1) % 9);
};

console.log(addDigits(11));

console.log(Boolean(""));
