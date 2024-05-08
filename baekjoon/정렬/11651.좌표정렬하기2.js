const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const result = [];
  const N = input[0][0];
  input.shift();
  input.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  for (let i = 0; i < N; i++) {
    result.push(input[i].join(" "));
  }

  console.log(result.join("\n"));
}

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
