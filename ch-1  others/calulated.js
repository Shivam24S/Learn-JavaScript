// function combine(a, b, c) {
//   let calculated = (a * b) / c;
//   console.log(calculated);
//   return calculated;
// }

// combine(1, 2, 3);

const transformToObjects = (numVal) => {
  return numVal.map((item) => {
    return { val: item };
  });
};

transformToObjects(1, 2, 3);
