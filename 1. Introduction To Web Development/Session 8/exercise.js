function formattedPhoneNumber(num) {
  if (num.length !== 10) {
    return "Invalid phone number";
  }
  return num.toString().replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

console.log(formattedPhoneNumber(1234567890));

function pigLatin(str) {
  return str
    .split(" ")
    .map((word) => word.slice(1) + word[0] + "ay")
    .join(" ");
}

console.log(pigLatin("Hello World"));
