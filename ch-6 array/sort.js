// The sort() sorts the elements of an array.

// The sort() overwrites the original array.

// The sort() sorts the elements as strings in alphabetical and ascending order.

const alphabet = [
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "a",
  "j",
  "k",
  "o",
  "m",
  "n",
  "l",
];

const sortedAlphabet = alphabet.sort();

console.log("sorted alphabet result=>", sortedAlphabet);

// another example of sort for sorting num value in ascending order

// note :- if we write  b - a will return number in descending order

const number = [10, 1, 20, 30, 40, 50];

const sortingNum = number.sort(sortedFunction);

function sortedFunction(a, b) {
  return a - b;
  // return b - a;
}

console.log("sorted Num result =>", sortingNum);
