class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();

const year = date.getFullYear();

const carDetails = new Car("mustang", 2020);

const carYearDetail = carDetails.age(year);

console.log("car year details result=>", carYearDetail);

// as you can see in this example we passed variable year as parameter to method so we can pass parameter in class method

// another example of class method with parameter

class Person {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }

  personAge(x) {
    // return this.name + this.surname + x - this.year;
    // return x - this.year + this.name + this.surname;
    return x - this.year;
  }
}

const currentYear = new Date().getFullYear();

const personDetail = new Person("john", "smith", 2001);

const personFullDetail = personDetail.personAge(currentYear);

console.log("personDetail result=>", personFullDetail);

// another example of class method with parameter

class Bike {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }
  yearOfBike(x) {
    // return (
    //   "i have " +
    //   this.company +
    //   " " +
    //   this.model +
    //   " " +
    //   " which " +
    //   x -
    //   this.year +
    //   " " +
    //   "years old"
    // );

    return x - this.year;
  }
}

const bikeYear = new Date().getFullYear();

console.log(bikeYear);

const bikeSpecification = new Bike("kawasaki", "Ninja", 2022);

const bikeResult = bikeSpecification.yearOfBike(bikeYear);

console.log("Bike result=>", bikeResult);

console.log(
  "Bike full specification",
  "i have " +
    bikeSpecification.company +
    " " +
    bikeSpecification.model +
    " " +
    "bike" +
    " " +
    "which is " +
    bikeResult +
    " " +
    " Years old"
);

// another example

class BrandYear {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  companyYear(year) {
    return year - this.year;
  }
}

const currentYearValue = new Date().getFullYear();

const BrandDetail = new BrandYear("apple", 1990);

const BrandDetailYear = BrandDetail.companyYear(currentYearValue);

console.log("brand Detail Year", BrandDetailYear);
