const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let result = [];
  const maxLength = Math.max(...input.map((line) => line.length));
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < 5; j++) {
      input[j][i] && result.push(input[j][i]);
    }
  }
  console.log(result.join(""));
}

rl.on("line", function (line) {
  input.push(line.split(""));
}).on("close", function () {
  solution(input);
  process.exit();
});
