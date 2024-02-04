// The sort() sorts the elements as strings in alphabetical and ascending order.

const alphabetArray = ["a", "d", "b", "e", "c", "f", "h", "g"];

const sortedAlphabet = alphabetArray.sort();

console.log("Sorted alphabet array result =>", sortedAlphabet);

// another example for number here it will not sorted number because its sort string in alphabetical order

const numArray = [1, 2, 5, 6, 7, 3, 4, 8, 10, 9];

const sortedNumArray = numArray.sort();

console.log("Sorted num array result =>", sortedNumArray);

// now if we have to sort numbet in array for that we can do passing compare function in sort method
// here is example of that

const numberArray = [1, 2, 5, 6, 7, 3, 4, 8, 10, 9, 15, 12, 13, 14, 11];

const sortedNumberArray = numberArray.sort(numCompareFunc);

function numCompareFunc(a, b) {
  return a - b;
}

console.log("Sorted number array result =>", sortedNumberArray);

// using this method we can sort the number
