// if you want to use the  object inside the static method, you can send it as a parameter:

class Person {
  constructor(name) {
    this.name = name;
  }

  static greeting(x) {
    return "hello" + " " + x.name;
  }
}

const personInfo = new Person("shiv");

const PersonGreeting = Person.greeting(personInfo);

console.log("person greeting Result =>", PersonGreeting);

//  as you can see in this example above we passing our object(personInfo) in static method as parameter so we can able to get op

// another example

class Car {
  constructor(company) {
    this.company = company;
  }

  static carName(name) {
    return "i have " + name.company + " " + "car";
  }
}

const carDetails = new Car("mercedes");

const carResult = Car.carName(carDetails);

console.log("car Result =>", carResult);
