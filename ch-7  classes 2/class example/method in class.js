class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  height() {
    return " and my height is : 6.5  ";
  }
}

const personDetail = new Person("john", 25);

// console.log(personDetail);

const personFullDetails =
  "my name is " +
  personDetail.name +
  " " +
  "and My age is " +
  personDetail.age +
  personDetail.height();

console.log("personDetail =>", personFullDetails);

// as you can see example  above here (height) is method

// another example

class Car {
  constructor(name, company) {
    this.name = name;
    this.company = company;
  }

  model() {
    return (
      " i have" +
      " " +
      this.name +
      " " +
      "car" +
      " " +
      "its from" +
      " " +
      this.company
    );
  }
}

const carDetails = new Car("G-wagon", "Mercedees");

const carResult = carDetails.model();

console.log("car Result =>", carResult);
