// const car = [
//   {
//     id: 1,
//     name: "bmw",
//     EngineCC: 3000,
//     color: "white",
//   },
//   {
//     id: 2,
//     name: "mercedes",
//     EngineCC: 4000,
//     color: "black",
//   },
// ];

// function getCarDetailById(id) {
//   if (id == 1) {
//     return car[0];
//   } else if (id == 2) {
//     return car[1];
//   } else {
//     return "data not available for this ID";
//   }
// }

// const carDetail = getCarDetailById(2);

// console.log(carDetail);

const car = [
  {
    id: 1,
    name: "bmw",
    EngineCC: 3000,
    color: "white",
  },
  {
    id: 2,
    name: "mercedes",
    EngineCC: 4000,
    color: "black",
  },
];

function getCarDetailById(id) {
  const selectedCar = car.find((car) => car.id === id);

  if (selectedCar) {
    return selectedCar;
  } else {
    return "Data not available for this ID";
  }
}

const carDetail = getCarDetailById(2);

console.log(carDetail);
