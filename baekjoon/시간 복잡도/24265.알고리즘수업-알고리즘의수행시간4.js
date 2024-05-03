const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const n = input;
  // n -1 까지의 수의 합
  console.log(((n - 1) * n) / 2);
  // 다항식으로는 n^2 이므로 최고차항은 2
  console.log(2);
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
