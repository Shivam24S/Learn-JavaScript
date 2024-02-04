// prototype	Allows you to add properties and methods to an Array object

Array.prototype.customeFunction = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

let alphabet = ["abcdefghijklmnopqrstuvwxy"];

alphabet.customeFunction();
console.log(alphabet);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.customeFunction();
console.log(fruits);
