const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const firstInput = input[0].split(" ").map(Number);
  const N = firstInput[0];
  const M = firstInput[1];
  const array = new Array(N);
  array.fill(0);

  for (let i = 0; i < M; i++) {
    const caseArray = input[i + 1].split(" ").map(Number);
    const start = caseArray[0];
    const end = caseArray[1];
    const ball = caseArray[2];
    for (let j = start; j <= end; j++) {
      array[j - 1] = ball;
    }
  }

  console.log(array.join(" "));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
