const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const N = input;
  let points = 2;

  for (let i = 0; i < N; i++) {
    points = points + points - 1;
  }

  console.log(points * points);
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
