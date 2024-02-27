// you can add method also in constructor in that method you can pass parameter also

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("mini", 2020);

console.log("my car age =>", myCar.age());

// another example same as upper for bike

class Bike {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  yearOfBike() {
    const date = new Date().getFullYear();
    return date - this.year;
  }
}

const BikeDetail = new Bike("ninja", 2022);

const bikeModelYear = BikeDetail.yearOfBike();

console.log("bike is " + bikeModelYear + " years old");
