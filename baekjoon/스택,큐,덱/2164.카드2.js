const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const N = input;
  const inputArray = new Array(N).fill().map((_, index) => N - index);
  const outputArray = [];

  while (inputArray.length + outputArray.length !== 1) {
    if (inputArray.length >= 2) {
      inputArray.pop();
      const topCard = inputArray.pop();
      outputArray.push(topCard);
    } else if (inputArray.length === 1) {
      inputArray.pop();
      while (outputArray.length > 0) {
        inputArray.push(outputArray.pop());
      }
      const topCard = inputArray.pop();
      outputArray.push(topCard);
    } else {
      while (outputArray.length > 0) {
        inputArray.push(outputArray.pop());
      }
    }
  }

  console.log(inputArray.length > 0 ? inputArray[0] : outputArray[0]);
}

rl.on("line", function (line) {
  input = Number(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
