const fs = require("fs");

console.log("Start reading file...");

fs.readFile("file.txt", "utf8", (err, data) => {
  if(err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Done reading file.");