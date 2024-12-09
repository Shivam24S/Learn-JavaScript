// With the call() method, you can write a method that can be used on different objects.

const person = {
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};

const person2 = {
  fName: "john",
  lName: "doe",
};

console.log(person.fullName.call(person2));

// another example

const personDetail = {
  fullName: function (city, country) {
    return this.fname + " " + this.lName + " " + city + " " + country;
  },
};

const person5 = {
  fname: "john",
  lName: "doe",
};

console.log(personDetail.fullName.call(person5, "NewYork", "USA"));
