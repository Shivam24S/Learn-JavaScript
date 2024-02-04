const numArray = [-1, 2, 5, 6, 7, 8, 15, 10, 11, 12];

let max = numArray[0];
let min = numArray[0];

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > max) {
    max = numArray[i];
  }

  if (numArray[i] < min) {
    min = numArray[i];
  }
}

console.log("max of Number: =>", max);
console.log("min of Number: =>", min);
