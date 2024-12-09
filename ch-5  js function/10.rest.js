// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sum(...args) {
  let sum = 0;

  for (let i of args) sum += i;

  return sum;
}

let x = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(x);

// another example find sum

function summingFun(...args) {
  let total = 0;
  for (let i of args) total += i;
  return total;
}

let sumOfNumber = summingFun(1, 5, 98, 5, 5, 5, 654, 55, 4, 4, 64, 6);

console.log("sum of all numbers", sumOfNumber);
