class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

class PersonDetails extends Person {
  constructor(name, lastName, age) {
    super(name, lastName);
    this.age = age;
  }

  personBioData() {
    return this.name + " " + this.lastName + " " + this.age;
  }
}

const personClass = new Person("nikola", "tesla");

console.log("person class result =>", personClass);

const personDetail = new PersonDetails("john", "smith", 24);

const resultOfperson = personDetail.personBioData();

console.log("result of person=>", resultOfperson);

// now if we accessing the person class method related example
