const num = [1, 2, 3, 4, 5];

// here reduce take two arguments and for function another for initial value

// in  this example as you can see the total of num array is 15 but in sum variable
//  we assigned total + 5 as second parameter so it will start total count from 5 after that they add num value
// 15 to it so 15+5 = 20 so it will print 20
const sum = num.reduce(numTotal, 5);

function numTotal(num, value) {
  return num + value;
}

console.log(sum);
