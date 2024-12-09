// If you want to stop interval function call, then you can use the clearInterval() method.

// program to stop the setInterval() method after five times example
let counter = 0;

let interval = setInterval(function () {
  counter += 1;

  if (counter === 5) {
    clearInterval(interval);
  }
  let time = new Date();

  let timeResult = time.toLocaleTimeString();

  console.log("time result =>", timeResult);
}, 2000);
