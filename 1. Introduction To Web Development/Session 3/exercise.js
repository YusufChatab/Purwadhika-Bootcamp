const input = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}

let word = "madam";
let reverseWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reverseWord += word.charAt(i);
  console.log(reverseWord);
}

if (word == reverseWord) {
  console.log("Palindrome");
} else {
  console.log("Is Not Palindrome");
}

// console.log(reverseWord);

let rupiah = 1234567;
console.log("Rp " + rupiah.toLocaleString("id-ID"));

// let helloWorld = "Hello World";
// let searchWorld = "ell";
// // let result = helloWorld.replace(searchWorld, "");

let string = "hello world";
let result = "";

for (i = 0; i <= string.length; i++) {
  if (i == 0 || string.charAt(i - 1) == " ") {
    result += string.charAt(i).toUpperCase();
  } else {
    result += string.charAt(i).toLowerCase();
  }
}
console.log(result);
