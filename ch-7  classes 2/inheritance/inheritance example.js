//  to create class inheritance use the extends keyword

// A class created with a class inheritance inherits all the methods from another class:

// The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

class Person {
  constructor(name) {
    this.name = name;
  }

  person() {
    return "My name is " + this.name;
  }
}

class PersonDetails extends Person {
  constructor(name, surname) {
    super(name);
    this.surname = surname;
  }

  personInfo() {
    return this.person() + " " + "and my surname is " + this.surname;
  }
}

const personData = new PersonDetails("shivam", "shrivastav");

const personFullDetail = personData.personInfo();

console.log("person full detail result", personFullDetail);

// another example of inheritance

class Car {
  constructor(company) {
    this.company = company;
  }
  carName() {
    return "i have " + this.company;
  }
}

class CarDetails extends Car {
  constructor(company, model) {
    super(company);
    this.model = model;
  }

  CarSpecification() {
    return this.carName() + " " + "which is " + this.model + " " + "model";
  }
}

const carDetailing = new CarDetails("mercedes", "G-Wagon");

const carResult = carDetailing.CarSpecification();

console.log("car Result =>", carResult);

const car1 = new Car("maruti");
const car2 = new Car("mahindra");

const carName = car1.carName();
console.log("car Name =>", carName);

class CarExtended extends CarDetails {
  constructor(engine, model) {
    super(model);
    this.engine = engine;
  }
}

const carExample = new CarExtended("red", "v8");

const carResultValue = carExample.CarSpecification();

console.log("car result value =>", carResultValue);
