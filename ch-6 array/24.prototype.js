// prototype	Allows you to add properties and methods to an Array object

Array.prototype.customFunction = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

let alphabet = ["abcdefghijklmnopqrstuvwxy"];

alphabet.customFunction();
console.log(alphabet);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.customFunction();
console.log(fruits);
