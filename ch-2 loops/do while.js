/*
The do…while loop can be used to execute a specific block of code at least once

Entry Controlled loops: In this type of loop, the test condition is tested before entering the loop body. For Loop and While Loops are entry-controlled loops.
Exit Controlled Loops: In this type of loop the test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute at least once, irrespective of whether the test condition is true or false. the do-while loop is exit controlled loop.






*/ 

// it will execute once  even if condition not met 

let test1 = 4;

do {
  console.log("do while op execute once", test1);
  test1++;
} while (test1 >= 10);

// it will execute due to condition satisfied
let test = 4;

do {
  console.log("do while op it will exucute all the value", test);
  test++;
} while (test <= 10);

// The main difference between do…while and while loop is that it is guaranteed that do…while loop will run at least once. Whereas, the while loop will not run even once if the given condition is not satisfied

// another example of while

//  here it will not run once
let num = 5;

while (num >= 10) {
  console.log("while op not executed", num);
}

// here it will run once
//  here it will not run once
let num2 = 5;

while (num2 <= 10) {
  console.log("while op  executed", num2);
  break;
}
