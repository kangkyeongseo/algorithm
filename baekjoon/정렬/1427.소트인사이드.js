const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const N = input;
  N.sort((a, b) => b - a);
  console.log(N.join(""));
}

rl.on("line", function (line) {
  input = line.split("").map(Number);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
