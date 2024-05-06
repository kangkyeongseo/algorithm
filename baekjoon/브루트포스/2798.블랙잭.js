const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [N, M] = input[0];
  const cards = input[1];
  const sums = [];

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum <= M) {
          sums.push(sum);
        }
      }
    }
  }

  sums.sort((a, b) => b - a);
  console.log(sums[0]);
}

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
