const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const count = input;

  for (let i = 1; i <= count; i++) {
    let result = "*".repeat(i);
    result = result.padStart(count, " ");
    console.log(result);
  }
}

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
