const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function getGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
}

function solution(input) {
  const N = input[0];
  const distance = [];
  let GCD = 0;

  for (let i = 2; i <= N; i++) {
    const calc = input[i] - input[i - 1];
    distance.push(calc);
    GCD = getGCD(calc, GCD);
  }

  let result = 0;
  for (let i = 0; i < N - 1; i++) {
    result += distance[i] / GCD - 1;
  }

  console.log(result);
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
