// let arr = [10, 2, 4, 15, 7, 5, 1, 3, 9, 8, 6];

// console.log(
//   arr.sort(function (a, b) {
//     return a - b;
//   })

function minMaxAvg(array) {
  array.sort((a, b) => a - b);

  let min = array[0];
  let max = array[array.length - 1];
  let avg = array.reduce((a, b) => a + b) / array.length;

  return `${min}, ${max}, ${avg}`;
}

console.log(minMaxAvg([10, 2, 4, 15, 7, 5, 1, 3, 9, 8, 6]));

function concat(arr) {
  let lastWord = arr.pop();
  return arr.join(" ") + `, and ${lastWord}`;
}

let fruits = ["apple", "banana", "cherry", "date"];

// console.log(concat(fruits));

function calculateArr(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}

console.log(calculateArr([1, 2, 3], [4, 5, 6]));

function addElement(newElement) {
  let res = [1, 2, 3, 4];

  if (res.includes(newElement) === false) {
    res.push(newElement);
  }

  return res;
}

console.log(addElement(7));

function mergeTwoLists(list1, list2) {
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
  }
  for (let i = 0; i < list2.length; i++) {
    result.push(list2[i]);
  }

  result.sort((a, b) => a - b);

  return result;
}

console.log(mergeTwoLists([1, 2, 3], [4, 5, 6]));
