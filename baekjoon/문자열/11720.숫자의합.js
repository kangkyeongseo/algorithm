const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  //   let result = 0;
  //   const N = Number(input[0]);
  //   const string = input[1];
  //   for (let i = 0; i < N; i++) {
  //     result += parseInt(string[i]);
  //   }
  //   console.log(result);

  const stringArray = input[1].split("").map(Number);
  console.log(stringArray.reduce((a, b) => a + b));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
