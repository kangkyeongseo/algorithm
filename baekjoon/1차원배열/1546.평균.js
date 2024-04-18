const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const scores = input[1].split(" ").map(Number);
  const max = Math.max(...scores);

  for (let i = 0; i < N; i++) {
    scores[i] = (scores[i] / max) * 100;
  }

  console.log(scores.reduce((a, b) => a + b) / N);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
