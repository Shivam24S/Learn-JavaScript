// get method

const person = {
  name: "john",
  surname: "doe",
  age: 22,

  get personAge() {
    return this.age;
  },
};

console.log(person.personAge);

// get method another example

const cars = {
  firstCar: "bmw",
  secondCar: "mercedes",
  thirdCar: "mini",

  get firstCarName() {
    return this.firstCar;
  },
};

console.log(cars.firstCarName);
