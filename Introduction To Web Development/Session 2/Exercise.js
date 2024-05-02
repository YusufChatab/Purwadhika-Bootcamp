// ● Write a code to convert celsius to fahrenheit
// ○ Example: 60 Celcius → 140 Fahrenheit
// ● Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number
// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number
// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 7
// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720
// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}

console.log(sum);

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const number = 4;
const result = factorial(number);
console.log("Factorial of", number, "is", result);

// let celcius = 60;

// let fahrenheit = (celcius * 9) / 5 + 32;

// // console.log(fahrenheit);

// let number = 25;

// let prime = 7;

function isPrime(number) {
  if (number < 1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(17));

// if (number % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }

function fibonacci(n) {
  fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(4));

let n = 15;
let a = 0;
let b = 1;
let c = 0;

for (let i = 1; i < n; i++) {
  c = a + b;
  a = b;
  b = c;
}

console.log(c);

// console.log(a + b);
