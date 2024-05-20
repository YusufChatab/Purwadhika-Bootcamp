// function triangle(height) {
//   let count = 0;

//   for (let i = 1; i <= height; i++) {
//     let res = "";

//     for (let j = 1; j <= i; j++) {
//       count++;
//       res += count < 10 ? `0${count} ` : `${count}`;
//     }
//     console.log(res);
//   }
// }

// triangle(4);
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(20);

function arrFizzBuzz(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr.join(" ");
}

console.log(arrFizzBuzz(20));

function bmiCalculator(weight, height) {
  let formula = weight / (height * height);
  let roundedBMI = Math.round(formula);
  console.log(roundedBMI);

  if (roundedBMI < 18.5) {
    return "Less Weight";
  } else if (roundedBMI >= 18.5 && roundedBMI < 25) {
    return "Normal Weight";
  } else if (roundedBMI >= 25 && roundedBMI < 30) {
    return "Overweight";
  } else if (roundedBMI >= 30 && roundedBMI < 40) {
    return "Very Overweight";
  } else {
    return "Obese";
  }
}

// console.log(bmiCalculator(80, 1.8));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArray = [];

// for (let i of arr) {
//   if (arr[i] % 2 === 0) {
//     newArray.push(arr[i]);
//   }
// }
// // console.log(newArray);

function filterEvenNumbers(arr) {
  let newArray = [];

  for (let i of arr) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }

  return newArray;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = filterEvenNumbers(arr);
console.log(newArray);

function convertStringToArray(string) {
  let stringToArray = string.split(" ");
  console.log(stringToArray);
}

// convertStringToArray("Hello World");

function triangle(x) {
  let result = "";
  for (let i = 1; i < x; i++) {
    result += i;
    console.log(result);
  }
}

// triangle(6);c
