let age = 15;

if (age >= 17) {
  console.log("You can now create an ID Card");
} else {
  console.log("You are not old enough to create an ID Card");
}

let grade = "B";

if (grade === "A") {
  console.log("Excellent Result!");
} else if (grade === "B") {
  console.log("Great Result!");
} else if (grade === "C") {
  console.log("Average Result!");
} else {
  console.log("Invalid Grade!");
}

let now = new Date();
let day = now.getDay(); // 2

switch (day) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jum'at");
    break;
  default:
    console.log("Sabtu");
}

let a = {};

if (a) {
  console.log(true);
} else {
  console.log(false);
}

let str = "";

console.log(str.length);

let kata = "Typescript";

console.log(kata === "Javascript" ? "Javascript" : "not Javascript");

console.log(grade == "A" ? "Excellent Result" : grade == "B" ? "Good Result" : "Invalid Grade")
