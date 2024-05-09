// 빈도수 패턴
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const M = Number(input[2]);
  const NCards = input[1].split(" ").map(Number);
  const MCards = input[3].split(" ").map(Number);
  const map = new Map();
  let result = "";

  for (let i = 0; i < N; i++) {
    if (map.get(NCards[i])) {
      map.set(NCards[i], map.get(NCards[i]) + 1);
    } else {
      map.set(NCards[i], 1);
    }
  }

  for (let j = 0; j < M; j++) {
    if (map.has(MCards[j])) {
      result += map.get(MCards[j]) + " ";
    } else {
      result += 0 + " ";
    }
  }

  console.log(result);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
