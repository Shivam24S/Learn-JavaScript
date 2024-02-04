let sumOfNumber = sum(20, 30, 40, 50, 60, 70, 80, 90);

function sum() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log("total sum of number =", sumOfNumber);
