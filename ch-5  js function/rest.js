// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sum(...args) {
  let sum = 0;

  for (let i of args) sum += i;

  return sum;
}

let x = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(x);
