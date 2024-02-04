// The splice() method adds and/or removes array elements.

// The splice() method
// overwrites the original array.

const fruits = ["apple", "banana", "mango", "orange", "popeye"];
console.log("fruits value before =>", fruits);
const fruitSpliced = fruits.splice(2, 1);
console.log("fruits array after =>", fruits);

console.log("fruits Spliced result It =>", fruitSpliced);

// another example of splice method

const vegetables = ["potato", "tomato", "onion", "garlic", "ginger"];

const vegetablesAdded = vegetables.splice(2, 0, "chilli", "coriander");

console.log("vegetables Added result =>", vegetables);
