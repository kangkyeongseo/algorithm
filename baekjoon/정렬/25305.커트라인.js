const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [N, k] = input[0].split(" ").map(Number);
  const scores = input[1].split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    let index = i;
    let temp;
    for (let j = 1 + i; j < N; j++) {
      if (scores[index] < scores[j]) {
        index = j;
      }
    }
    temp = scores[i];
    scores[i] = scores[index];
    scores[index] = temp;
  }

  console.log(scores[k - 1]);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
