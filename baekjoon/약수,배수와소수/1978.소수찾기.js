const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);
  let result = N;

  for (let i = 0; i < N; i++) {
    if (numbers[i] === 1) {
      result -= 1;
    } else {
      for (let j = 2; j <= numbers[i] / 2; j++) {
        if (numbers[i] % j === 0) {
          result -= 1;
          break;
        }
      }
    }
  }

  console.log(result);
  // Math.sqrt()
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
