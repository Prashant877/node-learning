function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

function addOne(num) {
  console.log(num + 1);
}

module.exports = {
  greet,
  addOne,
};

/*
{
    greet: greet,
    addOne: addOne
}
/ */