// JavaScript break statement is used to terminate the execution of the loop or the switch statement when the condition is true.

// In a switch, code breaks out and the execution of code is stopped.
// In a loop, it breaks out to the loop but the code after the loop is executed.

const age = 10;

switch (age) {
  case 10:
    console.log("you are not able give vote");
    break;

  case 18:
    console.log("you can give vote");
    break;

  default:
    console.log("you have to register for vote ");
}
