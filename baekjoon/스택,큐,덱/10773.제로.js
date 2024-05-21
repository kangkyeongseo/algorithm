const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const K = input[0];
  const array = [];

  for (let i = 1; i <= K; i++) {
    const number = input[i];
    switch (number) {
      case 0:
        array.pop();
        break;
      default:
        array.push(number);
        break;
    }
  }

  if (array.length === 0) {
    console.log(0);
  } else {
    console.log(array.reduce((a, b) => a + b));
  }
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
