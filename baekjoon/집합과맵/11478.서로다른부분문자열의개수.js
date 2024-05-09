// 빈도수 패턴
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const S = input;
  const set = new Set();

  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j < S.length + 1; j++) {
      set.add(S.slice(i, j));
    }
  }

  console.log(set.size);
}

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  solution(input);
  process.exit();
});
