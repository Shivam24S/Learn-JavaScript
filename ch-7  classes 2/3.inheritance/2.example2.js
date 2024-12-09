class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class PersonDetail extends Person {
  constructor(firstName, lastName, age) {
    super(firstName, lastName);
    this.age = age;
  }
}

class Shivam extends PersonDetail {
  constructor(firstName, lastName, age, height) {
    super(firstName, lastName, age);
    this.height = height;
  }
  getFullName() {
    return this.age;
  }
}

const shivamResult = new Shivam("john", "smith", 22, 6.5);

const getResult = shivamResult.getFullName();

console.log("result of example=>", getResult);
