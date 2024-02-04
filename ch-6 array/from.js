// from()	Creates an array from an string

let text = "abcdefghijklmnopqrstuvwxyz";

let text2 = Array.from(text);
console.log(text2);

// another example of from method
//
let objectVal = {
  name: "shivam",
  surname: "shrivastsav",
};

let fromOp = Array.from(objectVal.name);

console.log("from op for object=>", fromOp);
