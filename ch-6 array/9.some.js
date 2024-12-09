// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.

const age = [15, 20, 30, 40, 50, 60];

const ageResult = age.some(checkAge);

function checkAge(age) {
  return age < 15;
}

console.log(ageResult);

// another example

const num = [10, 20, 30, 40, 50, 60];

const numResult = num.some(checkNum);

function checkNum(num) {
  return num > 20;
}

console.log("num result=>", numResult);
