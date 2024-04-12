function solution(input) {
  const X = parseInt(input[0]);
  const Y = parseInt(input[1]);
  let result;

  if (X > 0 && Y > 0) {
    result = 1;
  } else if (X < 0 && Y > 0) {
    result = 2;
  } else if (X < 0 && Y < 0) {
    result = 3;
  } else {
    result = 4;
  }

  console.log(result);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.map((value) => parseInt(value));
  solution(input);
  process.exit();
});
