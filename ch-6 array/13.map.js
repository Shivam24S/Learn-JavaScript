//map()	Creates a new array with the result of calling a function for each array element

// map example

const num = [1, 2, 3, 4, 5];

const numSquare = num.map(Math.sqrt);

console.log(numSquare);

// another example

const numbers = [5, 10, 20, 30, 40, 50];

const MultiplyNum = numbers.map(MapFunction);

function MapFunction(num) {
  return num * 10;
}

console.log("multiply map function op =>", MultiplyNum);

// another example of map function

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
];

const TotalAlphabet = alphabet.map((item) => {
  return item;
});

console.log(TotalAlphabet);

// another example of map function

const alphabet2 = [
  {
    a: "b",
    c: "d",
    e: "f",
  },
  {
    g: "h",
    i: "j",
    k: "l",
  },
];

const alphabet3 = alphabet2.map((item) => {
  return item;
});

console.log("alphabet 3 op =>", alphabet3);
