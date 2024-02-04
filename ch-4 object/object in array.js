const myObj1 = {
  name: "shivam",
  surname: "shrivastav",
  detail: [
    { alphabet: "b", num: [3, 4] },
    { alphabet: "d", num: [5, 6] },
    { alphabet: "f", num: [7, 8] },
  ],
};

let Op = "";

for (let x in myObj1.detail) {
  Op += myObj1.detail[x].alphabet;
  for (let j in myObj1.detail[x].num) {
    Op += myObj1.detail[x].num[j];
  }
  // console.log(Op);
}

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
let x = "";

for (let i in myObj.cars) {
  x += myObj.cars[i].name;
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}

console.log(x);
