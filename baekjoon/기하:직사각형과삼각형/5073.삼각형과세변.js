const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let index = 0;
  while (input[index].reduce((a, b) => a + b) !== 0) {
    const maxLengthLine = Math.max(...input[index]);
    const setArray = new Set(input[index]);
    const isValid =
      input[index].reduce((a, b) => a + b) - maxLengthLine > maxLengthLine;
    if (!isValid) {
      console.log("Invalid");
    } else {
      if (setArray.size === 1) {
        console.log("Equilateral");
      }
      if (setArray.size === 2) {
        console.log("Isosceles");
      }
      if (setArray.size === 3) {
        console.log("Scalene");
      }
    }
    index++;
  }
}

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
