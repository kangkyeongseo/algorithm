const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function getPrime(x) {
  let number = x;
  if (number < 3) return 2;
  while (true) {
    const sqrt = Math.ceil(Math.sqrt(x));
    let isPrime = true;
    for (let i = 2; i <= sqrt; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return number;
    } else {
      number += 1;
    }
  }
}

function solution(input) {
  const N = input[0];

  for (let i = 1; i <= N; i++) {
    const n = input[i];
    console.log(getPrime(n));
  }
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
