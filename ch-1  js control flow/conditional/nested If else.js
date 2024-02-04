const age = 20;

const CheckAge = (age) => {
  if (age === 18) {
    if (age < 18) {
      console.log("age must be greater than 18");
    } else if ((age = 18)) {
      console.log("you have to register your self to vote portal");
    }
  } else if (age > 18) {
    console.log("if you have voter card then you can give vote ");
  }
};

CheckAge(age);
