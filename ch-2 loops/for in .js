// for/in loop: There is another advanced loop called for/in loop which runs through all the properties of an object. The loop will be executed once for each property of the object. The for/in loop can also be used over the properties of arrays. However, it is not advised to use for/in loop over arrays.  for/of and Array.forEach() loops are suggested to be used while working with arrays.

function forInLoop() {
  let data = { fName: "shivam", lName: "shrivastav", h: "6.6" };

  let value = " ";
  let x;

  for (x in data) {
    value += " " + data[x];
  }

  console.log("op of for in for object =>", value);
}
forInLoop();

// another example for in for array but its advised not to use for in array we can but not use instead of use for of and for each

const arr = [1, 2, 3, 4, 5];

let value = " ";

for (let i in arr) {
  value += " " + arr[i];
}

console.log("op of array for in =>", value);
