const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person);

// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name

console.log("by name op =>", person.city);

// Displaying the Object Properties in a Loop

let value = "";

for (let i in person) {
  value += person[i];
}
console.log("using for loop op =>", value);

// Displaying the Object using Object.values()

// any JavaScript object can be converted to an array using Object.values():

const opUsingValue = Object.values(person);

console.log("op using object values method =>", opUsingValue);

// Displaying the Object using JSON.stringify()

const myString = JSON.stringify(person);

console.log(myString);
