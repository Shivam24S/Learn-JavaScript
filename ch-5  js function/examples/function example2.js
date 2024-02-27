// const personsDetails = [
//   {
//     name: "john",
//     surname: "doe",
//     age: 25,
//   },

//   {
//     name: "nikol",
//     surname: "tesla",
//     age: 85,
//   },
// ];

// function personInfo(personDetail) {
//   if (personDetail.length > 0) {
//     const selectedPerson = personDetail[1];
//     return (
//       selectedPerson.name +
//       " " +
//       selectedPerson.surname +
//       " " +
//       selectedPerson.age
//     );
//   } else {
//     return "you haven't selected anything";
//   }
// }

// const personResult = personInfo(personsDetails);

// console.log("person result =>", personResult);

const personsDetails = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
  },
  {
    name: "rakesh",
    surname: "sharma",
    age: 28,
  },
];

function personInfo(personDetail) {
  // if (id == 2) {
  //   return personsDetails[0];
  // }
  if (personDetail) {
    return (
      personDetail.name + " " + personDetail.surname + " " + personDetail.age
    );
  } else {
    return "No person details available";
  }
}

// let personDetailing = personInfo(1);

let personDetailing = personInfo(2);
// const personalDetail2 = personDetail[0];
console.log(personDetailing);

const personDetailOne = personInfo(personsDetails[0]);

const personDetailTwo = personInfo(personsDetails[1]);

const personalDetailThree = personsDetails[0];

console.log("first Person result =>", personDetailOne);

console.log("second person result=>", personDetailTwo);

console.log("third person result=>", personalDetailThree);
