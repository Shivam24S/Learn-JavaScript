// reduce()	Reduce the values of an array to a single value (going left-to-right)

const num = [20, 30, 40];

const totalnum = num.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(totalnum);

const sum = [1, 2, 3, 4, 5];

const sumFunc = (total, sum) => {
  return total + sum;
};

const totalsum = sum.reduce(sumFunc);
console.log(totalsum);

// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
