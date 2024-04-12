const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const result = A > B ? ">" : A < B ? "<" : "==";

console.log(result);
