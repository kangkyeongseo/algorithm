const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const n = input;
  // n까지의 숫자중 3가지를 뽑아 중복없이 작성
  let result = (BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6);

  console.log(result.toString());
  console.log(3);
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
