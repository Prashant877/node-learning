async function fetchData() {
  try {
    const result = await fetch("https://fakestoreapi.com/products");

    console.log("result is: ", result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("this code runs finally!");
  }
}

const arrFunc = async () => {
  // this is my arrow func
};

fetchData();