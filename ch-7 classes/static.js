// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "hello";
  }
}

const myCar = Car.hello();

console.log(
  "here it will give u op because we used that hello on Class Car thats why =>  ",
  myCar
);

// if now i want to use hello method on myCar it will give an error

// let try that also

console.log("it will give an error=>", myCar.hello());

// If you want to use the myCar object inside the static method, you can send it as a parameter:

// example of a static method with variable passing as parameter to static method

// class Car {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello(x) {
//       return "Hello " + x.name;
//     }
//   }
//   const myCar = new Car("Ford");
//   console.log(Car.hello(myCar));
