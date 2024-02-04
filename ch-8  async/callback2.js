function displayingData(data) {
  console.log(data);
}

function calculation(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

calculation(5, 10, displayingData);
