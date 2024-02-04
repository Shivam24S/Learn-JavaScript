const arr1 = [1, 2, 3, 4, 5];

const arr2 = ["a", "b", "c", "d", "e"];

function swapArray(arr1, arr2) {
  const arr1Shift = arr1.shift();

  const arr2Push = arr2.push(arr1Shift);

  console.log("swapping Array 1 to array 2 ", arr2);

  const arr2Shift = arr2.shift();

  const arr1Push = arr1.push(arr2Shift);

  console.log("swapping Array 2 to array 1 ", arr1);
}

swapArray(arr1, arr2);
