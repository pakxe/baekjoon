const fs = require("fs");
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

arr.forEach((e) => {
  let [a, b] = e.split(" ").map(Number);
  console.log(a + b);
});
