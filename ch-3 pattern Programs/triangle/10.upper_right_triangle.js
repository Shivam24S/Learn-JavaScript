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

// another example

/* 
let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "* ";
  let space = "";  
  console.log(space.repeat(n - i) + str.repeat(i));
}

op
here space very matter (no space op )

* 
* * 
* * * 
* * * * 
* * * * * 

*/

/*


let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "* ";
  let space = " ";
  console.log(space.repeat(n - i) + str.repeat(i));
}

op
here space very matter (one space Op)

    * 
   * * 
  * * * 
 * * * * 
* * * * * 



*/

/* 

let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "* ";
  let space = "  ";
  console.log(space.repeat(n - i) + str.repeat(i));
}


op
here space very matter (two space Op)


        * 
      * * 
    * * * 
  * * * * 
* * * * * 

*/
