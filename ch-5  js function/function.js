// here i declared my function its called function declaration  its declared it not invoked yet
// after invoking myFun it will display the function value
function myFun() {
  console.log("function declaration");
}

// here i m invoking myFun

myFun();

// function expression

//  in function expression we can store our function in a variable

// example

let multiply = function funcExpression(a, b) {
  return a * b;
};

let multiplyOp = multiply(5, 10);

console.log(multiplyOp);

// as you can see here we store our function in variable then after i m invoking my variable and assign parameter in it
