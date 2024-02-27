//find()	Returns the value of the first element in an array that pass a test

// The find() method returns undefined if no elements are found.

//  here it will return only first element who passed the test

let num = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let num2 = num.find((num) => {
  return num > 20;
});

console.log(num2);

// find  another Methods
// here  as you see in num1 there is lots of num val which less than 30 but in op it will simply return 20 the first occurrence

let num1 = [20, 30, 40, 50, 10, 15, 20, 5];

let findNum = num1.find((num1) => {
  return num1 < 30;
});

console.log(findNum);

// find another example

let num6 = [20, 30, 40, 50];

let num7 = num6.find(findingNum);

function findingNum(num) {
  return num < 20;
}

console.log("if find method not pass the test result=>", num7);

// findIndx example

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

const age = [20, 30, 40, 50, 60];

const checkAge = (age) => {
  return age > 30;
};

const checkingAge = age.findIndex(checkAge);

console.log("find Index op => ", checkingAge);

// findLast example

// findLast()	Returns the value of the last element in an array that pass a test

// The findLast() method returns the value of the last element that passes a test.

// The findLast() method executes a function for each array element.

// The findLast() method returns undefined if no elements are found.

const num3 = [10, 20, 30, 40, 50, 60];

const checkNum = (num3) => {
  return num3 < 50;
};

const checkingNum = num3.findLast(checkNum);

console.log("find Last op => ", checkingNum);

// findLastIndex

// findLastIndex()	Returns the index of the last element in an array that pass a test

// The findLastIndex() method executes a function for each array element.

// The findLastIndex() method returns the index (position) of the last element that passes a test.

// The findLastIndex() method returns -1 if no match is found.

const num4 = [10, 20, 30, 40, 50, 60];

checkLastIndex = (num4) => {
  return num4 < 50;
};

const num5 = num4.findLastIndex(checkLastIndex);

console.log("last index op=>", num5);

// another example of findLastIndex for not match found it will return -1

const num8 = [10, 20, 30, 40];

const findLastIndexNotMatch = num8.findLastIndex((num) => {
  return num < 1;
});

console.log("findLastIndexNotMatch op =>", findLastIndexNotMatch);
