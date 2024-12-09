// Recursion is a process of calling itself. A function that calls itself is called a recursive function.
// A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
// To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.

// example of recursion function

// find factorial number

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
};

const factorialResult = factorial(5);

console.log("factorial result: " + factorialResult);
