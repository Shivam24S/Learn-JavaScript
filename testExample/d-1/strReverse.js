const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXY";

console.log("str reverse =>", alphabet.reverse);

// it will show undefined because there is no reverse method available on string
//  reverse built in js  method only available on array

// reverse array example

const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

console.log(" reverse result for array =>", alphabetArray.reverse());

//  now if we wanted to reverse str we can do that using diffrent method

function reversingString(str) {
  const reversedStr = str.split("").reverse().join("");
  console.log(
    "reverse str using funciton and array method  op =>",
    reversedStr
  );
}

reversingString("ABCD");

// using spread operator

const reverseSpread = (str) => {
  const reversedStr = [...str].reverse().join("");
  console.log(" reverse str using spread op =>", reversedStr);
};

reverseSpread("abcd");

// another example

const alphabetstr = "abcdefghijklmn";

const alphabetArr = Array.from(alphabetstr);
console.log(alphabetArr);

// now reverse str using array reverse method

const reverseStrArr = alphabetArr.reverse().join("");

console.log("reversed str using array op =>", reverseStrArr);
