const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const [M, N] = input;

  for (let i = M; i <= N; i++) {
    if (i === 1) continue;
    if (i === 2) console.log(i);
    const sqrt = Math.ceil(Math.sqrt(i));
    let isPrime = true;
    for (let j = 2; j <= sqrt; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
}).on("close", function () {
  solution(input);
  process.exit();
});
