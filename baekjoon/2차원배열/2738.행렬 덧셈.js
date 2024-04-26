const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const result = [];
  const [N, M] = input[0].split(" ").map(Number);
  for (let i = 0; i < N; i++) {
    const sum = [];
    const firstLine = input[i + 1].split(" ").map(Number);
    const secondLine = input[i + 1 + N].split(" ").map(Number);
    for (let j = 0; j < M; j++) {
      sum.push(firstLine[j] + secondLine[j]);
    }
    result.push(sum);
  }
  result.forEach((line) => console.log(line.join(" ")));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
