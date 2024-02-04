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

const cars = {
  firstCar: "bmw",
  secondCar: "mercedes",
  thirdCar: "",

  set thirdCarValue(thirdCar) {
    this.thirdCar = thirdCar;
  },
};

cars.thirdCarValue = "Rolls- Royce ";

console.log("op for car set value =>", cars.thirdCar);

console.log(cars);
