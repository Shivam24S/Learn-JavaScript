const personsDetails = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    age: 25,
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    age: 30,
  },
  // {
  //   id: 3,
  //   name: "Michael",
  //   surname: "Johnson",
  //   age: 22,
  // },
  // {
  //   id: 4,
  //   name: "Emily",
  //   surname: "Williams",
  //   age: 28,
  // },
  // {
  //   id: 5,
  //   name: "David",
  //   surname: "Brown",
  //   age: 35,
  // },
  // {
  //   id: 6,
  //   name: "Sophia",
  //   surname: "Miller",
  //   age: 29,
  // },
  // {
  //   id: 7,
  //   name: "William",
  //   surname: "Jones",
  //   age: 31,
  // },
  // {
  //   id: 8,
  //   name: "Olivia",
  //   surname: "Taylor",
  //   age: 27,
  // },
  // {
  //   id: 9,
  //   name: "Daniel",
  //   surname: "Anderson",
  //   age: 26,
  // },
  // {
  //   id: 10,
  //   name: "Ava",
  //   surname: "Moore",
  //   age: 24,
  // },
];

function getPersondetailById(name) {
  const selectedPerson = personsDetails.find((person) => person.name == name);
  // return selectedPerson;

  if (selectedPerson) {
    return selectedPerson;
  } else {
    return "No Persons Data Available for this ID ";
  }
}

const personDetailResult = getPersondetailById("John");

console.log("person Detail Result =>", personDetailResult);
