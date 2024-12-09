// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "* ";
//   console.log(str.repeat(i));
// }

/*


op


* 
* * 
* * * 
* * * * 
* * * * * 

*/

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "* ";

//   let space = "  ";

//   console.log(space.repeat(n - 1) + str.repeat(i));
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "* ";
//   let space = "  ";
//   console.log(space.repeat(n - i) + str.repeat(i));
// }

let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "* ";

  let space = "  ";

  console.log(space.repeat(n - i) + str.repeat(i));
}
