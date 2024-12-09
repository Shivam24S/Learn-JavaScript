// flat()	Concatenates sub-array elements

const numArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const numberArray = numArray.flat();
console.log("array Flat Op => ", numberArray);

// another example

// array.flat(depth)

// depth	Optional.
// How deep a nested array should be flattened.
// Default is 1.

const num = [
  [1, 2, [3, 4]],
  [5, 6, 7],
  [8, 9, 10],
];

const num2 = num.flat(1);

console.log("array Flat 2Nd ex Op => ", num2);

//flatMap()	Maps all array elements and creates a new flat array

const myarr = [1, 2, 3, 4, 5, 6, 7, 8];

const doubleNum = myarr.flatMap((x) => x * 2);

console.log("flat map op =>", doubleNum);
