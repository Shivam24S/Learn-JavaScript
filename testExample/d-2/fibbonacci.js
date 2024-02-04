// Fibonacci numbers are a sequence of numbers where every number is the sum of the preceding two numbers. It starts from 0 and 1 as the first two numbers.

const fibbonacciNumber = (n) => {
  if (n < 2) {
    return "number is less than 2";
  }

  let prevNum1 = 0;
  let prevNum2 = 1;

  for (let i = 1; i <= n; i++) {
    const num = prevNum1 + prevNum2;
    prevNum2 = prevNum1;
    prevNum1 = num;
    console.log("fibbonacci Number =>", num);
  }
};

fibbonacciNumber(10);
