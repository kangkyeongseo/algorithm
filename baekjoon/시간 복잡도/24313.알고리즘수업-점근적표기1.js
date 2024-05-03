const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [a_1, a_2] = input[0].split(" ").map(Number);
  const c = Number(input[1]);
  const n_0 = Number(input[2]);

  if (a_2 < 0 && a_1 > c) {
    console.log(0);
  } else if (a_2 <= (c - a_1) * n_0) {
    console.log(1);
  } else {
    console.log(0);
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
