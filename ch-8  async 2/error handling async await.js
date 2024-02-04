//  we can handle our error in async await using two methods:

// 1. as you know async always return promise so we can use .catch  method to handle our errors

// like these

// asyncFunc().catch(
//     // catch error and do something
// )

//  now second method and prefer method is use try and catch in async function to handle Error

// here an example of that

async function asyncFunc() {
  try {
    let apiUrl = await fetch("randomLink");

    let apiResult = apiUrl.json();

    let result = console.log(apiResult);

    console.log(result);
  } catch (err) {
    console.log(err);
  }

  //   we can throw our custome error also

  //  catch{
  //     throw new Error("its custome error")
  // }
}

asyncFunc();

// as you can see in above example we are provided the random link which will not fetch so we are  handling our error
