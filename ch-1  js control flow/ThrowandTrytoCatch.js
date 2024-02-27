/*The try statement lets you test a block of code to check for errors.
The catch statement lets you handle the error if any are present.
The throw statement lets you make your own errors.
The finally statement lets you execute code after try and catch.  
The finally block runs regardless of the result of the try-catch block. */

// try {
//   demoAlert("its demo of try and catch statement");
// } catch (err) {
//   console.log(err);
// }

// //another try example it will satisfy the condition

// function demo() {
//   let a = 24;
//   try {
//     console.log("value of a is " + a);
//   } catch (err) {
//     console.log(err);
//   }
// }

// demo();

// here in this code we are defining our error

// try {
//   throw new Error("using throw we can throw our own define error");
// } catch (err) {
//   console.log(err);
// }

// finally it will execute always no matter try catch statement in this code

//try true and finally also true in this example

try {
  console.log("try");
} catch (err) {
  console.log(err);
} finally {
  console.log("its finally  statement");
}

try {
  demoAlert("hello");
} catch (err) {
  console.log(err);
} finally {
  console.log("it will still print after catch also");
}
