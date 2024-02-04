// The new version of JavaScript (ES6) introduced the use of classes instead of functions. Prior to ES6, there were
//only classes and, functions which are callable objects.

//   javascript classes is template for object
// A JavaScript class is not an object.
// It is a template for JavaScript objects.

// with class always use constructor() method

class Car {
  constructor(name, year) {
    this.carName = name;
    this.year = year;
  }
}

const carOne = new Car("bmw", 2010);

const carTwo = new Car("mercedes", 2020);

console.log("class result for car one ", carOne.year);
console.log("class op for result two", carTwo.year);

console.log(carOne);
console.log(carTwo);

// The Constructor Method
// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method.

// another example of class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const personDetails = new Person("john", 25);
console.log(personDetails);

const person = {
  name: "john",
  surname: "doe",
};

person.age = 25;
person.age = 30;

console.log("person result =>", person);

const carColor = (Car.color = "red");
console.log("carOne result =>", carColor);
console.log(Car);
