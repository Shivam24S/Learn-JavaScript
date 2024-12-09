// The major difference between the continue and break statement is that the break statement breaks out of the loop completely while continue is used to
// break one statement and iterate to the next statement. In a For loop, iteration goes to an updated expression which means the increment expression is first updated.
//In a While loop, it again executes the condition.

for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}

let i = 0;
while (i < 11) {
  i++;
  if (i % 2 == 0) continue;
  console.log(i);
}
