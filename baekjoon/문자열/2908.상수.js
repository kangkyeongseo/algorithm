const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function reverseString(string) {
  return string.split("").reverse().join("");
}

function solution(input) {
  const A = Number(reverseString(input[0]));
  const B = Number(reverseString(input[1]));
  const result = A > B ? A : B;
  console.log(result);
}

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
