const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let max = input[0];
  let index = 1;

  for (let i = 0; i <= 9; i++) {
    if (input[i] > max) {
      max = input[i];
      index = i + 1;
    }
  }
  console.log(max);
  console.log(index);
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
