function fetchData(callback) {
  console.log("Start Fetching data...");

  setTimeout(() => {
    console.log("Fetched the first data");

    setTimeout(() => {
      console.log("fetching the second data");

      setTimeout(() => {
        console.log("fetching the third data");

        setTimeout(() => {
          console.log("fetching the fourth data");

          callback();
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}

console.log("Start");

fetchData(() => {
  console.log("fetched and Process data");
});

console.log("End");