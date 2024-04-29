const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const N = input;
  let result = 1;
  let m = 0;

  while (N > 1 + 6 * m) {
    m += result;
    result++;
  }

  console.log(result);
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
