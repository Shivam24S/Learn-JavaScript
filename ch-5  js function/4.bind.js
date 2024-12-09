// with the bind() method, an object can borrow a method from another object.

const person = {
  firstName: "john",
  LastName: "doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "Nilson",
  lastName: "hege",
};

let person3 = person.fullName.bind(person2);

console.log(person3());
