const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let result;
  for (let i = 1; i < 10; i++) {
    result = `${input} * ${i} = ${input * i}`;
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
