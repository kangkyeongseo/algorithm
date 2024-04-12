const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let result;
  const hour = input[0];
  const min = input[1];

  if (min - 45 < 0) {
    result = `${hour - 1 < 0 ? "23" : hour - 1} ${min + 15}`;
  } else {
    result = `${hour} ${min - 45}`;
  }

  console.log(result);
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
