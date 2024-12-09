const fruits = new Map([
  ["apples", 300],
  ["mango", 700],
  ["pineapple", 600],
]);

let a = fruits.get("apples");

console.log(a);
console.log("fruits values", fruits);

console.log("fruits size", fruits.size);

// The delete() method removes a Map element:

const deleting = fruits.delete("apples");

console.log("apple delate op =>", fruits);

const available = fruits.has("mango");

console.log("apple has val available  =>", available);

// The entries() method returns an iterator object with the [key,values] in a Map:

let text = " ";

for (const x of fruits.entries()) {
  text += x;
}

console.log("entries Op =>", text);

// The keys() method returns an iterator object with the keys in a Map:

let keys = "";

for (let x of fruits.keys()) {
  keys += " " + x + " ";
}

console.log("keys Op =>", keys);

// The values() method returns an iterator object with the values in a Map:

let text1 = "";
for (const x of fruits.values()) {
  text1 += x;
}

console.log("values op =>", text1);

console.log("keys Op =>", keys);

// clearing

const clearing = fruits.clear();

const lenghtOfFruits = fruits.size;
console.log("fruits Clearing =>", lenghtOfFruits);
