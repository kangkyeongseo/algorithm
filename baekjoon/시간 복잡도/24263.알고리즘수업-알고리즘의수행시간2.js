const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const n = input;
  // n의 크기에 따라 반복문 실행
  console.log(n);
  // 다항식으로는 n이므로 최고차항은 1
  console.log(1);
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
