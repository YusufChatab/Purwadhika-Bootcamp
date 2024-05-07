// let arr = [10, 2, 4, 15, 7, 5, 1, 3, 9, 8, 6];

// console.log(
//   arr.sort(function (a, b) {
//     return a - b;
//   })

function concatWords(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return arr.join(" and ");
  } else {
    let last = arr.pop();
    return arr.join(", ") + ", and " + last;
  }
}

console.log(concatWords(["a", "b", "c", "d"]));
