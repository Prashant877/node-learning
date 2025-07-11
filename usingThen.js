// https://fakestoreapi.com/products

fetch("https://fakestoreapi.com/products")
  .then((res) => {
    console.log("process or update the res");
    const newResponse = res;
    return { success: true, data: "updated data" };
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("running this line always");
  });

// console.log("the result is: ", result);