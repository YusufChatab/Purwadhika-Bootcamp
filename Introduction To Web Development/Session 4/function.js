function greeting(name) {
  const defaultMessage = "Hello ";

  return function () {
    return defaultMessage + name;
  };
}

const greetingDavid = greeting("David");
console.log(greetingDavid());

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const twice = multiplier(2);
console.log(twice(5));

function countDown(fromNumber) {
  console.log(fromNumber);
  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);
