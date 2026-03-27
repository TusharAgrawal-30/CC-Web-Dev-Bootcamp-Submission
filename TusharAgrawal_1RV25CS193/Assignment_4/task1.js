const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation Successful!");
        // reject("Operation Failed!");
    }, 2000);
});

myPromise
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });