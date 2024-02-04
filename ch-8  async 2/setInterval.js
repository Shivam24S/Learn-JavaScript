// The setInterval() method repeats a block of code at every given timing event.

// The commonly used syntax of JavaScript setInterval is:

// setInterval(function, milliseconds);

function showTime() {
  const d = new Date();

  const time = d.toLocaleTimeString();

  console.log("right now time is =>", time);
}

// now i want show time after each 2 second gap so i can  achieve this  using  setInterval()

setInterval(showTime, 1000);

//  as you can see above example setInterval method excute  the show time method after every second
