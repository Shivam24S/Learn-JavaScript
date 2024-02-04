const arr1 = [1, 2, 3, 4, 5];

const arr2 = ["a", "b", "c", "d", "e"];

const arraySwap1 = arr1.shift();

console.log("arraySwap1", arraySwap1);

const arrMerge = arr2.push(arraySwap1);

console.log("arrayMerge =>", arr2);

// now using function

const numArray = [1, 2, 3, 4, 5];

const strArray = ["a", "b", "c", "d", "e"];

const swapArray1toArray2 = () => {
  const arr1 = [...numArray];

  const arr2 = [...strArray];

  const arrSwap = arr1.shift();

  const arrMerge = arr2.push(arrSwap);

  console.log("result =>", arr2);
};

swapArray1toArray2();
