// here in this example  we invoke findMax function but as you can see we have lots of arguments there
//  but in our function we didn't added any parameter so how the op i get ?
//  so in this example we used arguments (js built In Object  )

// JavaScript functions have a built-in object called the arguments object.

// The argument object contains an array of the arguments used when the function was called (invoked).

// This way you can simply use a function to find (for instance) the highest value in a list of numbers:

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

let x = findMax(10, 20, 30, 40, 50, 60, 70, 80);

console.log("op for max value =>", x);
