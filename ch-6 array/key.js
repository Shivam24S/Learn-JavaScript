// it will return total lenght of the array

let item = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

// let keys = item.keys();

let totalKey = "";

for (let x of item.keys()) {
  totalKey += x;
}

console.log(totalKey);
