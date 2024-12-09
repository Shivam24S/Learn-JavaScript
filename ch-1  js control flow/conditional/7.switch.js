const day = new Date().getDay();

console.log("day ", day);
console.log(typeof day);

switch (day) {
  case 0:
    {
      console.log("today is sunday");
    }
    break;
  case 1:
    {
      console.log("today is monday");
    }
    break;
  case 2:
    {
      console.log("today is tuesday");
    }
    break;
  case 3:
    {
      console.log("today is wednesday");
    }
    break;
  case 4:
    {
      console.log("today is thursday");
    }
    break;
  case 5:
    {
      console.log("today is friday");
    }
    break;
  case 6:
    {
      console.log("today is saturday");
    }
    break;

  // default case its better convention to use default case in switch statement but if you don't use program can still run

  // default: {
  //   console.log(
  //     "its default case it will never execute for this programme because there is always day"
  //   );
  // }
}
