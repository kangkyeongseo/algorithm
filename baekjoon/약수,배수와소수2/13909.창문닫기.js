const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let sum = 0;
  let result = 1;
  while (true) {
    sum += 2 * result + 1;
    if (sum >= input) {
      break;
    }
    result++;
  }
  console.log(result);
}

rl.on("line", function (line) {
  input = Number(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
