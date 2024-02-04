// promise chainning another example

let age = 18;

let voterAgeCheck = new Promise((resolve, reject) => {
  if (age >= 18) {
    setTimeout(() => {
      resolve("you are able to give vote");
    }, 5000);
  } else if (age < 18) {
    setTimeout(() => {
      reject("you are not  able to give vote");
    }, 5000);
  }
});

console.log("wait for some time meanwhile we are verifying  your age...");

voterAgeCheck.then((voter) => {
  console.log(voter);
});
voterAgeCheck.then(function greet() {
  console.log("congrats you are eligible for voting ");
});

voterAgeCheck.catch((err) => {
  console.log(err);
});
voterAgeCheck.catch(function regret() {
  console.log("sorry you are not eligible for voting");
});
