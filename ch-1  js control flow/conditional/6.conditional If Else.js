// if (condition) {
// If the condition is met,
//code  will get executed.
// }

//   if examples

let age = 20;

if (age === 20) {
  console.log("you can give vote");
}

let num = 20;

if (num % 2 === 0) {
  console.log("number is even");
}

// if else example

let ageValue = 17;

if (ageValue >= 18) {
  console.log("you are eligible for driving license");
} else {
  console.log("you are not eligible for driving license");
}

// else if statement

let number = 1;

//let number = 0;

//let number = -1;

if (number > 0) {
  console.log("number is positive");
} else if (number < 0) {
  console.log("number is negative");
} else {
  console.log("number is 0");
}

// if else another example

let time = new Date().getHours();

// console.log("time", time);

if (time < 12) {
  console.log("good morning");
} else if (time < 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}
