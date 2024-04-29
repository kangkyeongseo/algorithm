const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const coins = [25, 10, 5, 1];

function solution(input) {
  const T = input[0];

  for (let i = 0; i < T; i++) {
    const result = [];
    let tesCase = input[i + 1];
    for (let j = 0; j < coins.length; j++) {
      result.push(Math.floor(tesCase / coins[j]));
      tesCase = tesCase % coins[j];
    }
    console.log(result.join(" "));
  }
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
