const maxOfnum = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const maxVal = Math.max(...num);
  const minVal = Math.min(...num);

  console.log("max value =>", maxVal);
  console.log("min value =>", minVal);
};

maxOfnum();

// using reduce

let numArray = [1, 2, 5, 6, 4, 9, 10, 11];

let maxOfnumArray = numArray.reduce((acc, curr) => Math.max(acc, curr));

console.log("max of num =>", maxOfnumArray);

let minOfnumArray = numArray.reduce((acc, curr) => Math.min(acc, curr));

console.log("min of num =>", minOfnumArray);

// another example for finding max in array

const numberArray = [10, 20, 15, 1, 2, 3, 50, 60, 9, 8];

const numberSort = numberArray.sort((a, b) => b - a);

// here we first sorting our num in descending order

console.log("here we first sorting our num in descending order=>", numberSort);

// now we want access the first element of an array because its the max num element in array

const maxOfNumberArray = numberSort.at();

console.log("max of number =>", maxOfNumberArray);
