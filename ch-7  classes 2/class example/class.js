// JavaScript Classes are templates for JavaScript Objects.
// blueprint for objects bts its we creating a object using class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const personDetail = new Person("john", 25);

console.log("person Result", personDetail);

console.log(Person);

//  in this example here (Person) is class Object
// constructer is method for intialising object properties
// here (personDetail is object or instance of class)
// using new we are creating a new object

// classes example

// class Car {
//   constructor(company, model) {
//     this.company = company;
//     this.model = model;
//   }
// }

// const carDetails = new Car("mercedes", "G-wagon");

// console.log("car Result", carDetails);
