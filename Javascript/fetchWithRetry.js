function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    const attemptFetch = (retryCount) => {
      console.log("Start Fetching data.........");
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          resolve(response);
        })
        .catch((error) => {
          console.log("Failed to fetch data.........");
          if (retryCount > 0) {
            setTimeout(() => {
              console.log(`Retrying... attempts left: ${retryCount}`);
              attemptFetch(retryCount - 1);
            }, delay * Math.pow(2, 3 - retryCount));
          } else {
            reject(error);
          }
        });
    };
    attemptFetch(retries);
  });
}

// Successful fetch
// fetchWithRetry("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Fetch failed after retries:", error));

// Failed fetch
fetchWithRetry("https://jsonplaceholder.typicode.com/testing")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch failed after retries:", error));
