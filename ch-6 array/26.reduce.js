// reduce()	Reduce the values of an array to a single value (going left-to-right)

const num = [20, 30, 40];

const totalNum = num.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(totalNum);

const sum = [1, 2, 3, 4, 5];

const sumFunc = (total, sum) => {
  return total + sum;
};

const totalSum = sum.reduce(sumFunc);
console.log(totalSum);

// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
