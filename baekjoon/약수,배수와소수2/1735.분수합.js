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

function getLCM(a, b) {
  const GCD = getGCD(a, b);
  return (a * b) / GCD;
}

function solution(input) {
  const [AChild, AParent] = input[0];
  const [BChild, BParent] = input[1];

  const parentLCM = getLCM(AParent, BParent);

  const newAChild = (parentLCM / AParent) * AChild;
  const newBChild = (parentLCM / BParent) * BChild;
  const sumChild = newAChild + newBChild;

  const temGCD = getGCD(sumChild, parentLCM);

  const result = [sumChild / temGCD, parentLCM / temGCD];

  console.log(result.join(" "));
}

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
