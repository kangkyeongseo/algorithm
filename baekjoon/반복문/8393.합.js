const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let result = 0;

  //   for (let i = 1; i < input + 1; i++) {
  //     result = result + i;
  //   }
  result = (input * (input + 1)) / 2;
  console.log(result);
}

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
