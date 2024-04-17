const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let result = "";
  let testCase = Number(input[0]);

  for (let i = 1; i < testCase + 1; i++) {
    const testNumber = input[i].split(" ").map(Number);
    const A = testNumber[0];
    const B = testNumber[1];

    result += `Case #${i}: ${A} + ${B} = ${A + B}` + "\n";
  }
  console.log(result);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
