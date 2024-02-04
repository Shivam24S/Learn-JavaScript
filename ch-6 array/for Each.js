// forEach()	Calls a function for each array element

const vegetables = ["potato", "tomato", "brinjal"];

let text = " ";

const myFunction = (item, index) => {
  text += index + " : " + item;
};
const allVegetables = vegetables.forEach(myFunction);
console.log("vegetables op", text);

let sum = 0;

let num = [1, 2, 3, 4, 5];

let Num2 = num.forEach(sumFunction);

function sumFunction(item) {
  return (sum += item);
}

console.log("sum op =>", sum);
