let myPromise = new Promise((resolve, reject) => {
  const myAge = 18;

  if (myAge >= 18) {
    resolve("User is an adult");
  } else {
    reject("user not adult");
  }
});

// myPromise.then((res) => {
//   console.log(res);
// }).catch(err => console.log(err));

async function abc() {
  const data = await myPromise;

  console.log(data);
}

abc();