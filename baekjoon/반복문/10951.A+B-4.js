const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const count = input.length;
  for (let i = 0; i < count; i++) {
    const testCase = input[i].split(" ").map(Number);
    const A = testCase[0];
    const B = testCase[1];
    console.log(A + B);
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
