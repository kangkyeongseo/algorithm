const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let result;
  const testNumber = Number(input[0]);

  for (let i = 1; i < testNumber + 1; i++) {
    const testCase = input[i].split(" ").map(Number);
    const A = testCase[0];
    const B = testCase[1];

    result = A + B;
    console.log(result);
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
