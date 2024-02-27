// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// promise as an object that links producing code and consuming code

// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected

// To create a promise object, we use the Promise() constructor.

// let promise = new Promise(function(resolve, reject){
//      //do something
// });

// The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

// If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.

// producing code for promise example

const count = true;

const countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve(" it's resolve function result");
  } else {
    reject(" it's reject function result");
  }
});

console.log("promise producing code op =>", countValue);

// as you can see in this example here countValue is a promise object

// new Promise is a promise constructor which take function as an argument

// and that function has two arguments  1.resolve , 2.reject

// we will attaching our .then and .catch method on promise object

// another example of promise

let num = 10;

const promiseObject = new Promise(function (resolve, reject) {
  if (num === 10) {
    setTimeout(() => {
      resolve("the value is 10");
    });
  } else {
    reject("the given number is not matched");
  }
});

promiseObject.then((result) => {
  console.log(result);
});

promiseObject.catch((err) => {
  console.log(err);
});

// another example of promise

let number = 24;

const checkNum = new Promise(function (resolve, reject) {
  if (number > 0) {
    setTimeout(() => {
      resolve("number is positive");
    }, 2000);
  } else if (number < 0) {
    setTimeout(() => {
      reject("number is negative");
    }, 2000);
  }
});

checkNum.then((result) => {
  console.log("result of promise resolve =>", result);
});

checkNum.catch((err) => {
  console.log("result of promise reject =>", err);
});
