const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const firstInput = input[0].split(" ").map(Number);
  const arrayLength = firstInput[0];
  const targetInter = firstInput[1];
  const array = input[1].split(" ").map(Number);
  const newArray = [];

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] < targetInter) {
      newArray.push(array[i]);
    }
  }

  console.log(newArray.join(" "));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
