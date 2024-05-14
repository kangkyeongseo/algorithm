const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function isPrime(x) {
  if (x === 1) return false;
  if (x <= 3) {
    return true;
  }
  const sqrt = Math.ceil(Math.sqrt(x));
  for (let i = 2; i <= sqrt; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(x) {
  const primes = new Map();
  for (let i = 1; i < x; i++) {
    if (isPrime(i)) {
      primes.set(i);
    }
  }
  return primes;
}

function solution(input) {
  const T = input[0];
  const maxNumber = Math.max(...[...input].slice(1));
  const primes = getPrimes(maxNumber);

  for (let i = 1; i <= T; i++) {
    let result = 0;

    for (let j = 1; j <= Math.ceil(input[i] / 2); j++) {
      if (primes.has(j) && primes.has(input[i] - j)) {
        result++;
      }
    }

    console.log(result);
  }
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
