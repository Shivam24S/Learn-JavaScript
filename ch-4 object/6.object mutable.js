// Objects are mutable: They are addressed by reference, not by value.

const person = { name: "john", surname: "doe", age: 20 };

console.log("person age before => ", person.age);

const x = person;

x.age = 10;

console.log("person age after =>", person.age);

//  as you can see we can change person object value after assign it in x so object values are mutable
