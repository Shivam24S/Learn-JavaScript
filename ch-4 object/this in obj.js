//  this refer to that  object whoever called or invoked ()

// this is not variable its keyword you cant change the value of this

// this example

const person = {
  name: "john",
  surname: "doe",

  fullName: function () {
    return this.name + " " + this.surname;
  },
};

console.log("op using this =>", person.fullName());
