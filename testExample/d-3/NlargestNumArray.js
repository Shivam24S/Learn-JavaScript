// const numArray = [1, 2, 10, 15, 20, 30, 40, 50, 60];

// function nLargestNumber(arr, n) {
//   // sorting array
//   const arraySort = arr.sort((a, b) => a - b);

//   console.log("array sorted Result =>", arraySort);

//   //   reverseing number

//   const reverseSort = arraySort.reverse();

//   console.log("array reverse Result =>", reverseSort);

//   //   now finding whatever the number related number
//   const findIndex = reverseSort[n - 1];

//   console.log("array find Result =>", findIndex);
// }

// nLargestNumber(numArray, 2);

// another and easy method

const numArray = [1, 2, 10, 15, 20, 30, 40, 50, 60];

const nLargestNumber = (arr, n) => {
  const arraySort = arr.sort((a, b) => b - a);

  console.log("array sort result =>", arraySort);

  const arrayLength = arraySort[n - 1];

  console.log("array length", arrayLength);
};

nLargestNumber(numArray, 2);
