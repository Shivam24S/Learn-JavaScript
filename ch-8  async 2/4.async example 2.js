// let age = 24;

// const voterAge = new Promise((resolve, reject) => {
//   if (age >= 18) {
//     setTimeout(() => {
//       resolve("you are able to give vote ");
//     }, 5000);
//   } else if (age < 18) {
//     setTimeout(() => {
//       reject("you are not able give vote ");
//     }, 5000);
//   }
// });

// console.log("wait for the some time meanwhile we are verifying your age... ");

// async function checkingVoterAge() {
//   try {
//     let result = await voterAge;
//     console.log("congrats you are eligible for voting");
//     console.log(result);
//   } catch (err) {
//     console.log(
//       "sorry we regret to inform you that you are not eligible for voting"
//     );
//     console.log(err);
//   }
// }

// checkingVoterAge();

// another   example

let age = 10;

const voterAge = new Promise((resolve, reject) => {
  if (age > 0 && age < 18) {
    setTimeout(() => {
      resolve("age must be equal or greater than 18");
    }, 3000);
  } else if (age >= 18) {
    setTimeout(() => {
      resolve(
        "if you have registered yourself at voter portal than you can give vote"
      );
    }, 3000);
  } else {
    reject("please enter a valid age");
  }
});

console.log("please wait we are verifying your age ");

async function checkVoter() {
  try {
    const result = await voterAge;
    console.log("result =>", result);
  } catch (err) {
    console.log(err);
  }
}

checkVoter();
