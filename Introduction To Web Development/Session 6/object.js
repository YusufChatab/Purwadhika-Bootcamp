const car = {
  brand: "BMW",
  model: "M135i xDrive",
  price: 80000,
};

const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};

// console.log(person.address?.city);

// console.log(Object.keys(person));

for (const key in person) {
  console.log(key);
  console.log(person[key]);
}

let selector = "address";
