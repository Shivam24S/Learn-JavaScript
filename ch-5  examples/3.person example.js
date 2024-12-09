// const personsDetails = [
//   {
//     id: 1,
//     name: "john",
//     surname: "doe",
//     age: 22,
//   },
//   {
//     id: 2,
//     name: "nikola",
//     surname: "tesla",
//     age: 85,
//   },
// ];

// function getPersondetailById(id) {
//   const selectedPerson = personsDetails.find((person) => person.id === id);
//   if (selectedPerson) {
//     return (
//       selectedPerson.name +
//       " " +
//       selectedPerson.surname +
//       " " +
//       selectedPerson.age
//     );
//   } else {
//     return "this ID doesn't exist";
//   }
// }

// const personResult = getPersondetailById(1);

// console.log("person Result op =>", personResult);

const personDetails = [
  {
    id: 1,
    name: "john",
    surname: "doe",
    age: 25,
  },
  {
    id: 2,
    name: "eva",
    surname: "moore",
    age: 20,
  },
];

const personInfo = (id) => {
  const selectedPerson = personDetails.find((person) => person.id === id);
  if (selectedPerson) {
    console.log(selectedPerson);
  } else {
    console.log("no person data available for this id ");
  }
};

const personResult = personInfo(3);

// console.log("person Info op =>", personResult);
