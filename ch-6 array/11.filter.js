//filter()	Creates a new array with every element in an array that pass a test

const age = [5, 10, 15, 20, 25, 30, 35];

const checkAge = (age) => {
  return age > 18;
};

let CheckingAge = age.filter(checkAge);

console.log("checking age =>", CheckingAge);

// filter another example

const num = [5, 10, 15, 20, 25, 30, 35];

const num2 = num.filter((num) => {
  return num > 20;
});

console.log("checking num =>", num2);

// just trying something else

// let text = "";

// const num2AllVal = num2.forEach(opFunc);

// function opFunc(name, index) {
//   text += name + ":" + index;
// }

// console.log("result of num2", text);
