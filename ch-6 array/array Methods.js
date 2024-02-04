// The at() method returns an indexed element from an array.

const array = ["a", "b", "c", "d", "e", "f", "g"];

// here it will return only starting value

let indexOfArray = array.at();

console.log("index of array =>", indexOfArray);

//  an array start couting index from 0
let indexOfArray1 = array.at(4);

console.log("index of array1 =>", indexOfArray1);

// another example of an  array

// concat()	Joins arrays and returns an array with the joined arrays

// The concat() method concatenates (joins) two or more arrays.

// The concat() method returns a new array, containing the joined arrays.

// The concat() method does not change the existing arrays.

let arr1 = ["a", "b", "c", "d", "e"];

let arr2 = ["f", "g", "h", "i", "j"];

let arr3 = arr1.concat(arr2);

console.log("arr concat example =>", arr3);

// anothe example of an array

//copyWithin()	Copies array elements within the array, to and from specified positions

//array.copyWithin(target, start, end)

let arr4 = ["a", "b", "c", "d", "e"];

let arr5 = arr4.copyWithin(4, 0);

console.log("copy within op   =>", arr5);

// another example of copy within

let arr6 = ["a", "b", "c", "d", "e", "f"];

let arr7 = arr6.copyWithin(3, 0, 2);

console.log("copy within op =>", arr7);
// entries()	Returns a key/value pair Array Iteration Object

//every()	Checks if every element in an array pass a test

//return true if pass test and return false if not

// every example

let age = [15, 30, 40, 50, 60, 70, 80];

const checkAge = (age) => {
  return age > 18;
};

let checkingAge = age.every(checkAge);

console.log("every example for checking age =>", checkingAge);

// fill()	Fill the elements in an array with a static value

// array.fill(value, start, end)

const fruits = ["apple", "mango", "banana", "orange"];

const AddingFruits = fruits.fill("Kiwi", 2, 4);

console.log("Fill Op =>", AddingFruits);
