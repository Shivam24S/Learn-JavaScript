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
