const details = { name: "john", lastName: "doe", email: "john@example.com" };

let text = "";

for (let i in details) {
  text += details[i];
}

console.log(text);
