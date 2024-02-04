// you can add method also in constructer in that method you can pass parameter also

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
