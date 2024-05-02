const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const x = Array(2);
  const y = Array(2);

  for (let i = 0; i < N; i++) {
    const marble = input[i + 1].split(" ").map(Number);
    if (i === 0) {
      x.fill(marble[0]);
      y.fill(marble[1]);
    }
    if (x[0] > marble[0]) {
      x[0] = marble[0];
    }
    if (x[1] < marble[0]) {
      x[1] = marble[0];
    }
    if (y[0] > marble[1]) {
      y[0] = marble[1];
    }
    if (y[1] < marble[1]) {
      y[1] = marble[1];
    }
  }
  console.log((x[1] - x[0]) * (y[1] - y[0]));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
