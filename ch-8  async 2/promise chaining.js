//Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.
// The then() method is used with the callback when the promise is successfully fulfilled or resolved.

// the catch() method is used with the callback when the promise is rejected or some error

// promise chaining example

// producing code
let count = true;

const countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("its resolve result");
  } else {
    reject("its reject result");
  }
});

// consuming code
countValue.then(function (result) {
  return result;
});

countValue.catch(function (error) {
  console.log(error);
});

// console.log("result of promise =>", countValue);

// finally method always get executed no matter our promise resolve or reject

// example with finally method in promise

const value = true;
// here using true false we can check our resolve and reject function result

const promiseValue = new Promise((resolve, reject) => {
  if (value) {
    resolve("its resolve function Result");
  } else {
    reject("its reject function Result");
  }
});

promiseValue.then((result) => {
  return result;
});

promiseValue.catch((err) => {
  return err;
});

promiseValue.finally(function () {
  console.log(
    "finally statement in promise  will execute no matter promise resolve or reject"
  );
});

console.log("result of promise =>", promiseValue);
