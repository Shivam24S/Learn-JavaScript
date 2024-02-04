// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

class Person {
  constructor(name) {
    this.name = name;
  }

  static Greeting() {
    return "hello";
  }
}

const personName = new Person("john");

console.log("person name result =>", personName);

//  now i want to call static methods

const personGreeting = Person.Greeting();

console.log("person greeting result =>", personGreeting);

//  if i m trying to call my static method on object (personDetail) here. it will throw an error

// lets try

// const personInfo = personDetail.Greeting();

// console.log(
//   "it will throw error because we call static method on object =>",
//   personInfo
// );

// now overcome to this problem we can use our object as parameter of static method example of this available on second static2

// static another example

class Car {
  constructor(company, model) {
    this.company = company;
    this.model = model;
  }

  static carEdition() {
    return "i have Range-Rover SVR   which has Mansory Edition";
  }
}

const carDetails = new Car("Range-Rover", "SVR");

const carResult = Car.carEdition();

console.log("car Result =>", carResult);
