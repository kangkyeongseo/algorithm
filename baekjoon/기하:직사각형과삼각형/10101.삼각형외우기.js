const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const sumOfAngles = input.reduce((a, b) => a + b);
  const setArray = new Set(input);
  if (sumOfAngles === 180) {
    switch (setArray.size) {
      case 1:
        console.log("Equilateral");
        break;
      case 2:
        console.log("Isosceles");
        break;
      case 3:
        console.log("Scalene");
        break;
    }
  } else {
    console.log("Error");
  }
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
