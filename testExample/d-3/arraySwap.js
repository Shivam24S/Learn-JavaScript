const arr1 = [1, 2, 3, 4, 5];

const arr2 = ["a", "b", "c", "d", "e"];

function swapArray1toArray2(arr1, arr2) {
  const arrayShift = arr1.shift();

  console.log(arrayShift);

  const newArray2 = arr2.push(arrayShift);

  console.log("Result of swapping array 1 to array 2 =>", arr2);
}

swapArray1toArray2(arr1, arr2);

// swap array 2 to array 1

function swapArray2toArray(arr1, arr2) {
  const arrayShift = arr2.shift();
  console.log(arrayShift);

  const newArray1 = arr1.push(arrayShift);

  console.log("Result of swapping array 2 to array 1=>", arr1);
}

swapArray2toArray(arr1, arr2);
