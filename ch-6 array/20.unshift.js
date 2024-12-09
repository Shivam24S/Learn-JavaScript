// The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.

const fruits = ["apple", "banana", "orange"];

console.log("fruits result before => ", fruits);

const fruitsResult = fruits.unshift("kiwi");

console.log("fruits result after => ", fruits);

// another example of unshift

const anotherResult = fruits.unshift("guava");

console.log("another result op=>", fruits);
