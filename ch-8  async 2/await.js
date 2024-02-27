// The await keyword is used inside the async function to wait for the asynchronous operation.
// The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example,

// await example

const promiseVal = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("it's resolve function it appeared after 5 seconds");
  }, 5000);
});

async function asyncFunction() {
  let result = await promiseVal;

  console.log("resolve function op=>", result);

  console.log("it appeared after async function result");
}

asyncFunction();

// as you can see in this example  second console.log() can print result immediately but it will not because we have used await() here
// so it will wait for the promise full fulled then and then only it will execute

// The async function allows the asynchronous method to be executed in a seemingly synchronous way. Though the operation is asynchronous, it seems that the operation is executed in synchronous manner.
