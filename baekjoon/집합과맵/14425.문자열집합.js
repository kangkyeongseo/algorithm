const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const map = new Map();
  let result = 0;

  for (let i = 0; i < N; i++) {
    map.set(input[i + 1], i);
  }

  for (let j = 0; j < M; j++) {
    if (map.has(input[j + 1 + N])) {
      result += 1;
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
