const person = { name: "john", surname: "deo", age: 20 };

console.log("person object before =>", person);

//  now deleting person object values

delete person.age;

console.log("person object after deleting age  =>", person);
