//indexOf()	Search the array for an element and returns its position

const fruit = ["apple", "orange", "banana", "guava"];

let fruitIndex = fruit.indexOf("banana");

console.log("indexOf  banana is   :=> ", fruitIndex);

//  here it will start counting index from index starting position we defined
const vegetables = ["potato", "tomato", "brinjal", "tomato", "chilli"];

let indexOfvegeatables = vegetables.indexOf("tomato", 2);

console.log("index of Tomato is :=> ", indexOfvegeatables);
