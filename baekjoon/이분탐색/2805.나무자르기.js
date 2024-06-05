const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const trees = input[1].split(" ").map(Number);
  let start = 0;
  let end = Math.max(...trees);
  let result = 0;

  while (start <= end) {
    let cuttingTree = 0;
    let mid = Math.floor((start + end) / 2);
    for (let i = 0; i < N; i++) {
      cuttingTree += trees[i] - mid > 0 ? trees[i] - mid : 0;
      if (cuttingTree > M) break;
    }
    if (cuttingTree >= M) {
      if (mid > result) result = mid;
      start = mid + 1;
    } else if (cuttingTree < M) {
      end = mid - 1;
    }
  }
  console.log(result);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
