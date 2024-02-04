// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code

// promise example

function displayingResult(result) {
  console.log(result);
}

// here i m prudecing my code

let promiseExample = new Promise(function (myResolveFunc, myRejectFunc) {
  let x = 10;

  if (x == 0) {
    myResolveFunc("this is  resolve function");
  } else {
    myRejectFunc("this is  reject function");
  }
});
// here i m consuming my code
promiseExample.then(
  function (value) {
    displayingResult(value),
      function (error) {
        displayingResult(error);
      };
  },
  function (error) {
    displayingResult(error);
  }
);

// console.log("result =>", displayingResult);

displayingResult();
