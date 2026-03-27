const success = true; // change to false to test

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve("Data fetched!");
        } else {
            reject("Failed to fetch data!");
        }
    }, 2000);
});

myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });