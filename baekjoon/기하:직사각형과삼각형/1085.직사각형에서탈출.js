const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const [x, y, w, h] = input;
  const distance = [];
  distance.push(x, y, w - x, h - y);
  const result = Math.min(...distance);
  console.log(result);
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
