// callback is function passed as an argument to another function
// using callback we can do asynchronous task in js
// a callback function it runs after another function has finished
// when you pass functions as an arguments dont use paranthesis

// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function.

// callback example

function resultOfSum(result) {
  console.log("sum result =>", result);
}

function sumOfNumber(num1, num2, mycallback) {
  let sum = num1 + num2;

  mycallback(sum);
}

sumOfNumber(10, 20, resultOfSum);

// as you can see here we are passing a resultOfSum function as an argument to sumOfNumber

// another example of callback

function greet(name, myCallbackFunc) {
  console.log("Its callbck Function op");

  myCallbackFunc(name);
}

function callBack(name) {
  console.log("hello" + " " + name);
}

// now i m invoking my greet function and i will send argument and callBack function as also argument

greet("shivam", callBack);

// as you can see here we are passing a callback function as an argument to greet function and we dont have to use () parenthesis in callback function when
// we are passing as an argument

// another callback example

const resultOfCalcultion = (result) => {
  console.log("result of num using substract=>", result);
};

const minusOfNum = (num1, num2, myCallbackFunc) => {
  total = num1 - num2;
  myCallbackFunc(total);
};

minusOfNum(100, 50, resultOfCalcultion);
