// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
setInterval(timeFunc, 1000);

function timeFunc() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
