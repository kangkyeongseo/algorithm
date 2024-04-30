const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const M = input[0];
  const N = input[1];
  let primes = new Array(N - M + 1).fill().map((_, index) => index + M);

  let index = 0;
  for (let i = M; i <= N; i++) {
    if (i === 1) {
      primes.splice(index, 1, "");
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        primes.splice(index, 1, "");
        break;
      }
    }
    index++;
  }

  primes = primes.filter((prime) => typeof prime === "number");

  if (primes.length > 0) {
    console.log(primes.reduce((a, b) => a + b));
    console.log(primes[0]);
  } else {
    console.log(-1);
  }
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
