// set method example  it will  not repeat the same value

const arr = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]);

console.log("set op  it will not repeat the same value =>", arr);

//  in this example as you can see in our array we have same value num but using set it will not repeat the same value

const alphabet = new Set(["a", "b", "c", "a", "d", "c", "b"]);

console.log("new set op =>", alphabet);

// The forEach() method invokes a function for each Set element:'

let text = "";

alphabet.forEach(function (item) {
  text += item;
});

console.log("op using for each =>", alphabet);

// another example

let alphabetVal = " ";

for (let i of alphabet) {
  console.log("alphabetVal =>", i);
}
