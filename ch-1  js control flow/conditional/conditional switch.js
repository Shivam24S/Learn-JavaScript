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
