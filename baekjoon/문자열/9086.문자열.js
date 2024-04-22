const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const T = Number(input[0]);
  for (let i = 0; i < T; i++) {
    const string = input[i + 1];
    const firstChar = string[0];
    const lastChar = string[string.length - 1];

    console.log(firstChar.concat(lastChar));
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
