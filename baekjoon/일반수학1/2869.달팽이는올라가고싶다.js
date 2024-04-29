const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const A = input[0];
  const B = input[1];
  const V = input[2];
  const oneDayLength = A - B;
  const divide = Math.ceil((V - A) / oneDayLength);
  console.log(divide + 1);
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
