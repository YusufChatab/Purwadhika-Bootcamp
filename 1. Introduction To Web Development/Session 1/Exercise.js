// ● Write a code to find area of rectangle.
// ○ Example : length = 5, width = 3 → 15
// ● Write a code to find perimeter of rectangle.
// ○ Example : length = 5, width = 3 → 16
// ● Write a code to find diameter, circumference and area of a circle.
// ○ Example : radius = 5
// ○ Output : diameter = 10, circumference = 31.4159, area = 78.539
// ● Write a code to find angles of triangle if two angles are given.
// ○ Example : a = 80, b = 65 → 35
// ● Write a code to get difference between dates in days.
// ○ Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2
// ● Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day

// let length = 5;
// let width = 3;

// let p = 2 * (length + width);

// const r = 2;
// const res = 2 * Math.PI * r;

// let a = 80;
// let b = 65;

// c = 180 - a - b;

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate(2);

function convertDaysToYears(days) {
  let years = Math.floor(days / 365);
  let months = Math.floor((days % 365) / 30);
  let daysLeft = Math.floor((days % 365) % 30);
  return `${years} years, ${months} months, ${daysLeft} days`;
}

console.log(convertDaysToYears(200));

// console.log("Area of rectangle: " + length * width);

// console.log("Perimeter of rectangle: " + p);

// console.log("Diameter of circle: " + 2 * r);

// console.log("triangle: " + c);

// console.log("Date: " + year + "-" + month + "-" + day);
