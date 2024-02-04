function Person(name, age, surName) {
  this.firstName = name;
  this.lastName = surName;
  this.ageValue = age;
}

const personNewObj = new Person("john", 20, "doe");

console.log(personNewObj);

// now adding prototype properties in object

// The JavaScript prototype property also allows you to add object properties to objects constructors:
Person.prototype.nationality = "English";

console.log(personNewObj.nationality);
