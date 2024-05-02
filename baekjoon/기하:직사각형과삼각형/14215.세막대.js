const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const [a, b, c] = input.sort((a, b) => a - b);
  const calc = c - (a + b);
  if (calc < 0) {
    console.log(a + b + c);
  } else {
    console.log(a + b + c - calc - 1);
  }
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
