// Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

// class Person {
//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }
// }

// class User {
//   constructor(name, password) {
//     this.#name = name;
//     this.#password = password;
//   }

//   get getName() {
//     console.log(this._name);
//   }
// }

// const kedar = new User("kedar", 123456);
// console.log(kedar.#name);

class User {
  constructor(name, password) {
    // Private members (using #)
    this.#setName(name);
    this.#setPassword(password);
  }

  // Private methods to set private attributes
  #setName(name) {
    this._name = name;
  }

  #setPassword(password) {
    this._password = password;
  }

  // Public method to get the name
  getName() {
    return this._name;
  }
}

const kedar = new User("kedar", 123456);

// Accessing the name using the public method
console.log(kedar.setName()); // Output: kedar
