const details = { name: "john", lastName: "doe", email: "john@example.com" };

let text = "";

for (let i in details) {
  text += " " + details[i];
}

console.log(text);

// another example

const carDetails = { brand: "BMW", engine: "v8", color: "Black" };

let car = "";

for (let x in carDetails) {
  car += " " + carDetails[x];
}
console.log("car detail =>", car);
