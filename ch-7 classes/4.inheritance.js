// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class:

// The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
//Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// example of class inheritance

class Car {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return "i have " + this.carName;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + " it is a" + " " + this.model;
  }
}

let myCar = new Model("ford", "mustang");

console.log("inheritance method result=>", myCar.show());

// another example of class inheritance

class Person {
  constructor(name) {
    this.name = name;
  }

  personDetail() {
    return "my name is " + this.name;
  }
}

class Details extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  show() {
    return this.personDetail() + " " + "and my Age is " + this.age;
  }
}

const personDetails = new Details("shiv", 22);

console.log("person details example result=>", personDetails.show());

// another example of class inheritance

class Bike {
  constructor(brand) {
    this.brand = brand;
  }
  bikeBrand() {
    return "i have " + this.brand + " brand ";
  }
}

class bikeModel extends Bike {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  bikeModelName() {
    return this.bikeBrand() + " " + this.model + " bike";
  }
}

const bikeOne = new bikeModel("kawasaki", "ninja");

const BikeDetail = bikeOne.bikeModelName();

console.log("bikeDetail example result=>", BikeDetail);
