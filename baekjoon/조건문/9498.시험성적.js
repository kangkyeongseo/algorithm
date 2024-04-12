const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const score = parseInt(input);

const result =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";

console.log(result);
