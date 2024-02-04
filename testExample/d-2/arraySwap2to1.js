const numArr1 = [1, 2, 3, 4, 5];

const strArr2 = ["a", "b", "c", "d", "e"];

const swapArray2toArray1 = () => {
  const arr1 = [...numArr1];

  const arr2 = [...strArr2];

  const arr2Value = arr2.shift();

  const arr2toarr1 = arr1.push(arr2Value);

  console.log("swap Array2 to Array1 =>", arr1);
};

swapArray2toArray1();
