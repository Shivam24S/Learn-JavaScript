// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "* ";
//   console.log(str.repeat(i));
// }

// /*

// op

// *
// * *
// * * *
// * * * *
// * * * * * */

// let n1 = 5;

// for (let i = 1; i <= n1; i++) {
//   let space = "  ";
//   let str = "* ";

//   console.log(space.repeat(n1 - i) + str.repeat(i));
// }

// /*
// op

//         *
//       * *
//     * * *
//   * * * *
// * * * * */

// let n3 = 5;

// for (let i = n3; i >= 1; i--) {
//   let str = " * ";
//   let space = "   ";

//   console.log(space.repeat(n3 - i) + str.repeat(i));
// }

// /*
// op

//  *  *  *  *  *
//     *  *  *  *
//        *  *  *
//           *  *
//              *

// */

// let n4 = 5;

// for (let i = n4; i >= 1; i--) {
//   let str = "* ";

//   console.log(str.repeat(i));
// }

// /*

// op

// * * * * *
// * * * *
// * * *
// * *
// *

// */

// 1 example
let n = 5;

for (let i = 1; i <= 5; i++) {
  let str = "* ";

  console.log(str.repeat(i));
}

// 1 example
let n1 = 5;

let str = " ";

for (let i = 1; i <= n1; i++) {
  str += "* ";

  console.log(str);
}

let n2 = 5;

// second example

for (let i = 1; i <= n2; i++) {
  let space = "  ";
  let str = "* ";

  console.log(space.repeat(n2 - i) + str.repeat(i));
}

// third OP
let n3 = 5;

for (let i = n3; i >= 1; i--) {
  let str = "* ";

  console.log(str.repeat(i));
}

// firth op

let n4 = 5;

for (let i = n4; i >= 1; i--) {
  let space = "  ";
  let str = "* ";

  console.log(space.repeat(n4 - i) + str.repeat(i));
}
