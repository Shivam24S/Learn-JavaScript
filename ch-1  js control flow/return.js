// JavaScript return statement is used to return a particular value from the function. The function will stop the execution when the return statement is called and return a specific value.
//The return statement should be the last statement of the function because the code after the return statement won’t be accessible.
// We can return any value i.e. Primitive value (Boolean, number and string, etc) or object type value ( function, object, array, etc) by using the return statement.

const demo = (a, b) => {
  return a * b;
};

const op = demo(5, 6);

console.log(op);

//or
console.log(demo(5, 6));
