const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const chess = [1, 1, 2, 2, 2, 8];
  const result = input.map((item, index) => {
    return chess[index] - item;
  });
  console.log(result.join(" "));
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
