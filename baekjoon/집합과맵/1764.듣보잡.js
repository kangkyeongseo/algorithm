// 빈도수 패턴
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const neverSeen = new Map();
  const neverSeenAndHeard = [];

  for (let i = 1; i <= N; i++) {
    neverSeen.set(input[i]);
  }

  for (let j = 0; j < M; j++) {
    if (neverSeen.has(input[j + N + 1])) {
      neverSeenAndHeard.push(input[j + N + 1]);
    }
  }

  neverSeenAndHeard.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  });

  console.log(neverSeenAndHeard.length);
  console.log(neverSeenAndHeard.join("\n"));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
