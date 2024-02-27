// Looping in programming languages is a feature that facilitates the execution of a set of instructions repeatedly until some condition evaluates and becomes false. We come across for loop which provides a brief and systematic way of writing the loop structure.

// for (statement 1 ; statement 2 ; statement 3){
//     code here...
// }
// Statement 1: It is the initialization of the counter. It is executed once before the execution of the code block.
// Statement 2: It defines the testing condition for executing the code block
// Statement 3: It is the increment or decrement of the counter & executed (every time) after the code block has been executed.

for (let i = 0; i < 10; i += 5) {
  // if (i % 2 == 0) {
  //   console.log("number Op " + i);
  // }
  console.log("number Op " + i);
}

// another example

let fruits = ["apple", "banana", "orange", "mango"];

let len = fruits.length;

let allFruits = "";

for (let i = 0; i < len; i++) {
  allFruits += " " + fruits[i];
}
console.log("fruits op =>", allFruits);

// let i = 3;

// console.log("i++ op", ++i);

// let i2 = 3;

// console.log("++i op", ++i2);

// for (let i = 0; i < 5; i++) {
//   console.log(++i);
// }

// another example

const vegetables = ["potato", "onion", "tomato", "brinjal"];

const lengthOfVeg = vegetables.length;

let allVegetables = " ";

for (let i = 0; i < lengthOfVeg; i++) {
  allVegetables += " " + vegetables[i];
}

console.log("vegeatables result =>", allVegetables);
