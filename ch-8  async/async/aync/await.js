// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

const API_URL = "https://api.github.com/users/shivam24S";

async function apiCall() {
  try {
    const apiUrl = await fetch(API_URL);

    const response = await apiUrl.json();

    console.log("api response: => ", response);
  } catch (error) {
    console.log("api Error : => ", error);
  }
}

apiCall();
