const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let index = 0;
  while (input[index] !== 0) {
    const n = input[index];

    let result = 0;
    for (let i = n + 1; i <= 2 * n; i++) {
      if (i === 1) continue;
      if (i <= 3) {
        result++;
        continue;
      }
      const sqrt = Math.ceil(Math.sqrt(i));
      let isPrime = true;
      for (let j = 2; j <= sqrt; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        result++;
      }
    }
    index++;
    console.log(result);
  }
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
