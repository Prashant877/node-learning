const fs = require("fs");

console.log("Start reading file...");

const data = fs.readFileSync("file.txt","utf8");
console.log(data);

console.log("Done reading file...");