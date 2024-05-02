const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const x_1 = [input[0][0]];
  const x_2 = [];
  const y_1 = [input[0][1]];
  const y_2 = [];
  for (let i = 1; i < 3; i++) {
    if (input[i][0] === x_1[0]) {
      x_1.push(input[i][0]);
    } else {
      x_2.push(input[i][0]);
    }
    if (input[i][1] === y_1[0]) {
      y_1.push(input[i][1]);
    } else {
      y_2.push(input[i][1]);
    }
  }
  const [x, y] = [
    x_1.length === 2 ? x_2[0] : x_1[0],
    y_1.length === 2 ? y_2[0] : y_1[0],
  ];
  console.log(`${x} ${y}`);
}

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
