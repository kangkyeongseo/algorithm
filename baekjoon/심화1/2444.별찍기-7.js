const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  //   const N = input;
  //   for (let i = 0; i < 2 * N - 1; i++) {
  //     let result;
  //     if (i < N) {
  //       result = " ".repeat(N - 1 - i) + "*".repeat(2 * (i + 1) - 1);
  //     } else {
  //       result = " ".repeat(i - N + 1) + "*".repeat(2 * (2 * N - i - 1) - 1);
  //     }
  //     console.log(result);
  //   }
  const N = input;
  const star = [];
  star.push("*".repeat(2 * N - 1));
  for (let i = 0; i < N - 1; i++) {
    star.push(" ".repeat(i + 1) + "*".repeat(2 * (N - i - 1) - 1));
    star.unshift(" ".repeat(i + 1) + "*".repeat(2 * (N - i - 1) - 1));
  }

  console.log(star.join("\n"));
}

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
