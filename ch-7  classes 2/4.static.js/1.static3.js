class Car {
  constructor(company, model) {
    this.company = company;
    this.model = model;
  }

  static carEdition(carInstance) {
    return (
      "I have " +
      carInstance.company +
      " " +
      carInstance.model +
      " which has Mansory Edition"
    );
  }
}

const carDetails = new Car("Range-Rover", "SVR");

const carResult = Car.carEdition(carDetails);

console.log("Car Result =>", carResult);
