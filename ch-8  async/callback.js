// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// When you pass a function as an argument, remember not to use parenthesis.

// Right: myCalculator(5, 5, myDisplayer);

// function calculation(num1, num2) {
//   let total = num1 + num2;
//   return total;
// }

// function displayingData(total) {
//   return total;
// }

// const dataResult = calculation(5, 5, displayingData);

// console.log("Result=>", dataResult);

// another example of callback

function displayResult(result) {
  return result;
}

function calculation(num1, num2, myCallback) {
  let total = num1 + num2;
  return myCallback(total);
}

const resultOfCalculation = calculation(5, 5, displayResult);

console.log("Result=>", resultOfCalculation);
