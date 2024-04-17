const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  for (let i = 0; i >= 0; i++) {
    const testCase = input[i].split(" ").map(Number);
    const A = testCase[0];
    const B = testCase[1];
    if (A === 0 && B === 0) return;
    console.log(A + B);
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
