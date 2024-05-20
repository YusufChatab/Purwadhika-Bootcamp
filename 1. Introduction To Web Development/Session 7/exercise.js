// Create a function to check if two objects are equal

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(isEqual({ a: 1 }, { a: 1 }));

// Create a function to get the intersection of two objects

function intersection(obj1, obj2) {
  let res = {};

  for (const key in obj1) {
    if (obj1[key] === obj2[key]) {
      res[key] = obj1[key];
    }
  }
  return res;
}

console.log(intersection({ a: 1, b: 2 }, { a: 2, b: 2 }));

// Create a function to merge two array of student data and remove duplicate data

let arr1 = [
  { name: "John", email: "nT3pJ@example.com" },
  { name: "Jane", email: "ss8Bt@example.com" },
];
let arr2 = [
  { name: "Alvn", email: "alvn@example.com" },
  { name: "Jane", email: "ss8Bt@example.com" },
];

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));

class Player {
  name;
  health = 100;
  power = 10;
  constructor(name) {
    this.name = name;
  }

  showStatus() {
    console.log(this.name, this.health, this.power);
  }
}

let player1 = new Player("john");
player1.showStatus();
