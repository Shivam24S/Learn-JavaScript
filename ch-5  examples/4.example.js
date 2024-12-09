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
  if (id == 1) {
    return car[0];
  } else {
    return car[1];
  }
}

const carDetail = getCarDetailById(1);

//console.log(carDetail);

// another example of this

function getCardetail(id) {
  let index = id - 1;

  return car[index];
}

const cardetail2 = getCarDetailById(2);

console.log(cardetail2);
