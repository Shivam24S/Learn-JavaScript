const person = { name: "John", surname: "doe" };

console.log("person object before => ", person);

person.age = 20;

console.log("person object after adding age in object => ", person);

// for loop in js

let text = " ";
for (let x in person) {
  text += person[x];
}

console.log("for loop op => ", text);
