const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const arrayLength = Number(input[0]);
  const array = input[1].split(" ").map(Number);
  let min = array[0];
  let max = array[0];

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  console.log(`${min} ${max}`);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
