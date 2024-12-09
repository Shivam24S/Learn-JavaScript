// promise example

function promiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 2000);
  });
}

console.log("Start");
promiseFunction()
  .then((result) => {
    console.log(result);
    console.log("End");
  })
  .catch((error) => {
    console.log(error);
  });

//    async await example
async function asyncFunction() {
  try {
    console.log("Start");
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved");
      }, 2000);
    });
    const result = await promise;
    console.log(result);
    console.log("End");
  } catch (error) {
    console.error(error);
  }
}

asyncFunction();
