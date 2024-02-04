// const persondetail = [
//   {
//     id: 1,
//     name: "john",
//     surname: "doe",
//     age: 25,
//   },
//   {
//     id: 2,
//     name: "nikola",
//     surname: "tesla",
//     age: 70,
//   },
// ];

// function selectedPersonDetail(id) {
//   const selectedPerson = persondetail.find((person) => person.id === id);

//   if (selectedPerson) {
//     return (
//       selectedPerson.name +
//       " " +
//       selectedPerson.surname +
//       " " +
//       selectedPerson.age
//     );
//   } else {
//     return "no person data available with this id ";
//   }
// }

// const personDetailResult = selectedPersonDetail(1);

// console.log("personDetailResult=>", personDetailResult);

const Car = [
  {
    id: 0,
    brand: "mercedes",
    engine: "3000c",
    color: "green",
  },
  {
    id: 1,
    brand: "bmw",
    engine: "3500c",
    color: "black",
  },
  {
    id: 2,
    brand: "maruti",
    engine: "1000c",
    color: "black",
  },
  {
    id: 3,
    brand: "rolls-royce",
    engine: "5000c",
    color: "green",
  },
];

function carDetail(carId) {
  const selectedCar = Car.find((car) => car.id === carId);

  if (selectedCar) {
    return (
      "i have" +
      " " +
      selectedCar.brand +
      " " +
      "which is " +
      " " +
      selectedCar.engine +
      " " +
      "and" +
      " " +
      "car color is" +
      " " +
      selectedCar.color
    );
  } else {
    console.log("sorry no  data found for this car id ");
  }
}

const carResult = carDetail(2);

console.log("car result: " + carResult);
