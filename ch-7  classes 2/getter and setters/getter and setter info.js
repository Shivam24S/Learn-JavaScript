// Classes also allows you to use getters and setters.

// It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

// To add getters and setters in the class, use the get and set keywords.

class Car {
  constructor(name) {
    this.name = name;
  }

  get cname() {
    return this.name;
  }

  set cname(x) {
    this.name = x;
  }
}

const carName = new Car("mustang");

const carNameResult = carName.cname;

console.log("car name =>", carNameResult);

// here we are setting the car name value

const anotherCarName = (carNameResult.cname = "g-wagon");

console.log("another car name =>", anotherCarName);

// get and set other example

class Person {
  constructor(name) {
    this.name = name;
  }

  get personName() {
    return this.name;
  }

  set personName(x) {
    return (this.name = x);
  }
}

const personDetail = new Person("john");
console.log("getting Full Person Name before  =>", personDetail);
const getPersonName = personDetail.personName;

console.log("getting person name =>", getPersonName);

const setPersonName = (personDetail.personName = "peter");
console.log("getting Full Person Name after =>", personDetail);

//  in this example here we are getting and setting the name property value of person class
