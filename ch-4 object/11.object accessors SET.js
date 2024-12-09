const person = {
  name: "shivam",
  lastName: "shrivastav",
  age: "",

  set ageValue(age) {
    this.age = age;
  },
};

person.ageValue = 22;

console.log(person.age);

// set method another example

const car = {
  firstCar: "BMW",
  secondCar: "Mercedes",
  thirdCar: "",

  set thirdCarName(thirdCarNameValue) {
    this.thirdCar = thirdCarNameValue;
  },
};

car.thirdCarName = "Rolls-Royce";

console.log("third car name => ", car.thirdCar);
