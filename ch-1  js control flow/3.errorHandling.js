//  in this example i m handling my programme error using try catch and define

let age = 15;

function checkingAge() {
  try {
    if (age >= 18) throw "age is greater than 18";
    if (age <= 18) throw "age is less than 18";
  } catch (err) {
    console.log(err);
  }
}
checkingAge();
