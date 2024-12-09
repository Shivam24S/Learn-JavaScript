// async function always returned promise

// async example

async function greet() {
  console.log("Hello");
  return Promise.resolve("shivam");
}
// here we can get only greet function invocation
greet();

// now we want return result so async return promise so we can use then method on greet() function

greet().then(function (result) {
  console.log("op with promise", result);
});

// async example

// we can't use async directly on arrow function like async const myFunc = () =>{} like this
//  if you still want to use async as arrow function you can use in function expression  like these

let arrowFunc = async () => {};
