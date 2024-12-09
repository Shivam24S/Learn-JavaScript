let fruit = "tomato";

switch (fruit) {
  case "apple":
  case "orange":
  case "mango":
    console.log(`${fruit} is fruits`);
    break;
  default: {
    console.log(`${fruit} is not fruit`);
  }
}

const car = "mercedes";

switch (car) {
  case "BMW":
  case "mercedes":
  case "Ferrari":
    console.log(`${car} is car`);
    break;
  default: {
    console.log(`${car} is not car`);
  }
}
