// With the apply() method, you can write a method that can be used on different objects.

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

// example of an apply method

const person = {
  fullName: function (city, country) {
    return this.fName + " " + this.Lname + city + " " + country;
  },
};

const person2 = {
  fName: "john",
  Lname: "doe",
};

console.log(person.fullName.apply(person2, ["newYork", "USA"]));

// another exam[ple of apply method

const car = {
  carDetail: function (engine, color) {
    return this.brand + " " + this.model + " " + engine + " " + color;
  },
};

const carDetail2 = {
  brand: "BMW",
  model: "M5",
};

console.log(car.carDetail.apply(carDetail2, ["v8", "black"]));
