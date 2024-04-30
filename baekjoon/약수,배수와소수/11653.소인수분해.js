const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let N = input;
  const primes = [];

  while (N !== 1) {
    let isFindPrime = false;
    for (let i = 2; !isFindPrime; i++) {
      if (N % i === 0) {
        N = N / i;
        primes.push(i);
        isFindPrime = true;
      }
    }
  }

  primes.forEach((prime) => console.log(prime));
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
