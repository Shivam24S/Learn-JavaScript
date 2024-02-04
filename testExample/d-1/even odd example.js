// even number example

const num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const result = num.filter(evenCalculation);

function evenCalculation(num) {
  if (num % 2 === 0) {
    return num;
  }
}

console.log("result of even number =>", result);

// another example odd

const num2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const result2 = num2.filter(oddCalculation);

function oddCalculation(num2) {
  if (num2 % 2 !== 0) {
    return num2;
  }
}

console.log("result of odd number =>", result2);
