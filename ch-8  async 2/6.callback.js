// callback is function passed as an argument to another function
// using callback we can do asynchronous task in js
// a callback function it runs after another function has finished
// when you pass functions as an arguments don't use parenthesis

// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function.

// callback example

function resultOfSum(result) {
  console.log("sum result =>", result);
}

function sumOfNumber(num1, num2, myCallback) {
  let sum = num1 + num2;

  myCallback(sum);
}

sumOfNumber(10, 20, resultOfSum);

// as you can see here we are passing a resultOfSum function as an argument to sumOfNumber

// another example of callback

function greet(name, myCallbackFunc) {
  console.log("Its callback Function op");

  myCallbackFunc(name);
}

function callBack(name) {
  console.log("hello" + " " + name);
}

// now i m invoking my greet function and i will send argument and callBack function as also argument

greet("shivam", callBack);

// as you can see here we are passing a callback function as an argument to greet function and we don't have to use () parenthesis in callback function when
// we are passing as an argument

// another callback example

const resultOfCalculation = (result) => {
  console.log("result of num using subtract=>", result);
};

const minusOfNum = (num1, num2, myCallbackFunc) => {
  total = num1 - num2;
  myCallbackFunc(total);
};

minusOfNum(100, 50, resultOfCalculation);

// another example of callback

function sum(a, b, total) {
  let sumOfNumber = a + b;
  return total(sumOfNumber);
}

function callBackFunc(total) {
  return total;
}

console.log("sum function callback op =>", sum(5, 10, callBackFunc));

// another example of callback

const callBackSumFunc = (result) => {
  console.log("total =>", result);
};

const sumOfNumberFunc = (num1, num2, callBackSumFunc) => {
  const Total = num1 + num2;
  return callBackSumFunc(Total);
};

const result = sumOfNumberFunc(5, 10, callBackSumFunc);
