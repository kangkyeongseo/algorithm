const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const n = input;
  //  반복문 3개의 중첩
  console.log((BigInt(n) * BigInt(n) * BigInt(n)).toString());
  // 다항식으로는 n^3 이므로 최고차항은 3
  console.log(3);
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
