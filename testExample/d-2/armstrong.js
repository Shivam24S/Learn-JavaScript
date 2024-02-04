// an Armstrong number is a special kind of number in math. It's a number that equals the sum of its digits, each raised to a power. For example, if you have a number like 153, it's an Armstrong

// in short for checking given  number is armstrong or not

// for that there are some condition to satisfy

// 1 . calculate total character in number ex : 1634 so here total charcter n = 4
// 2. now do multiply all num character with that n power
// example  1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4 like that way

// 3. now do calculate for each and addition the all op of calculated result

//  check the op calculated result is same as given number so if they same then number is armstrong number if not then they are not armstrong number

// example of armstrong number 1634 , 153
// example of  not  armstrong number = 123

const armstrong = (number) => {
  // converting into string array
  const numberArray = number.toString().split("");

  console.log("number into array =>", numberArray);

  // finding the length of the num array

  const numberLength = numberArray.length;

  console.log("number length =>", numberLength);

  //   after according to length calculation

  const calculation = numberArray.map((number) => {
    return Math.pow(number, numberLength);
  });

  console.log(" result of length and number power calculation =>", calculation);

  //   total  of that calculation value

  let sum = 0;

  function sumFunc(num) {
    return (sum += num);
  }
  calculation.forEach(sumFunc);

  console.log("sum of calculation =>", sum);

  //   now checking result and number is same or not due to this we can said number is armstronng or not

  //   if (sum == number) {
  //     console.log(true);
  //   } else {
  //     return false;
  //   }

  const checkArmstrongNumber = (sum, number) => {
    if (sum === number) {
      return true;
    } else {
      return false;
    }
  };
  console.log(
    "number is armstrong result => ",
    checkArmstrongNumber(sum, number)
  );
};

const armstrongResult = armstrong(1634);
