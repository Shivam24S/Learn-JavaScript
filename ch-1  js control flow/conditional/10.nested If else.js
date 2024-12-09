// const age = 20;

// const CheckAge = (age) => {
//   if (age === 18) {
//     if (age < 18) {
//       console.log("age must be greater than 18");
//     } else if ((age = 18)) {
//       console.log("you have to register your self to vote portal");
//     }
//   } else if (age > 18) {
//     console.log("if you have voter card then you can give vote ");
//   }
// };

// CheckAge(age);

// another example of if else

const age = 18;

const CheckAge = (age) => {
  if (age === 18) {
    console.log("you have to register your self First");
    if (age > 18) {
      console.log("if registration done then you can give vote");
    } else {
      console.log(
        "your age is 18  but you still cant give vote because you have to register your self"
      );
    }
  } else if (age < 18) {
    console.log("age must be 18 years old");
  }
};

CheckAge(age);
