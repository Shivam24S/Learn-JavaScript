// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

// The commonly used syntax of JavaScript setTimeout is:

// setTimeout(function, milliseconds);

// setTimeout example

let setTimeoutResult = setTimeout(greet, 5000);

function greet() {
  console.log("hello");
}

console.log("set time out result =>", setTimeoutResult);

//  as you can see in above example we passed greet function as an argument to setTimeOut method so we can say that greet function is callBack function

// the above example result will appear when setTimeout timer expired
