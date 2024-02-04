// A palindrome is a word, sentence, verse, or even number that reads the same backward or forward.

function isPalinDrome(str) {
  let palinDrome = str.split("").reverse().join("");

  if (palinDrome === str) {
    return true;
  } else {
    return false;
  }
}

let result = isPalinDrome("kayak");

console.log("result of palinDrome =>", result);

// palindrome condition false example

let anotherExample = isPalinDrome("anotherExample");

console.log("result of palindrome false example =>", anotherExample);
