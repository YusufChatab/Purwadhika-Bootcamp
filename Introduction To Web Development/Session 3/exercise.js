const input = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
  console.log(`${input} x ${limit} = ${input * i}`);
}

function palindrome() {
  let str = "madam";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      console.log("Not a palindrome");
    } else console.log("Palindrome");
  }
}

let rupiah = 1000;

console.log("Rp " + rupiah.toLocaleString("id-ID"));
