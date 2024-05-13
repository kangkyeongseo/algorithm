const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function getGCD(A, B) {
  if (Number(B) === 0) {
    return A;
  }
  return getGCD(B, BigInt(Number(A % B)));
}

function solution(input) {
  const [A, B] = input;
  const GCD = getGCD(BigInt(A), BigInt(B));
  const LCM = (BigInt(A) * BigInt(B)) / GCD;
  console.log(Number(LCM));
}

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
