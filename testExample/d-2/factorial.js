//  what is factorial

// The factorial of a number is the multiplication of all the numbers between 1 and the number itself. It is written like this: n!. So the factorial of 2 is 2! (= 1 × 2).

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
};

const factorialResult = factorial(5);

console.log("factorial result: " + factorialResult);
