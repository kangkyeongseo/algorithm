const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const N = input[0];
  const K = input[1];
  let i = 1;
  let count = 0;
  while (true) {
    if (N % i === 0) {
      count++;
    }
    if (K === count) {
      console.log(i);
      break;
    }
    if (N === i) {
      console.log(0);
      break;
    }
    i++;
  }
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
