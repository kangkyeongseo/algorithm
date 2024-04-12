const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const year = parseInt(input);

let result;

if (
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 4 === 0 && year % 400 === 0)
) {
  result = 1;
} else {
  result = 0;
}

console.log(result);
