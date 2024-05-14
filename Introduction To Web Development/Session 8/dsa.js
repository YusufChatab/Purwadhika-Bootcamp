class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }
}

function palindromNumber(x) {
  let reversedStr = "";
  let xStr = x.toString();

  for (let i of xStr) {
    reversedStr = i + reversedStr;
  }
  return reversedStr === xStr;
}

console.log(palindromNumber(123));
