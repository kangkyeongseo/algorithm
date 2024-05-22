const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const [N, K] = input;
  const inputArray = new Array(N).fill().map((_, index) => N - index);
  const outputArray = [];
  const result = [];

  while (inputArray.length + outputArray.length > 1) {
    let index = 1;

    while (index !== K) {
      if (inputArray.length > 0) {
        outputArray.push(inputArray.pop());
        index++;
      } else {
        while (outputArray.length > 0) {
          inputArray.push(outputArray.pop());
        }
      }
    }

    if (inputArray.length > 0) {
      result.push(inputArray.pop());
    } else {
      while (outputArray.length > 0) {
        inputArray.push(outputArray.pop());
      }
      result.push(inputArray.pop());
    }
  }

  console.log("<" + result.concat(inputArray, outputArray).join(", ") + ">");
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
}).on("close", function () {
  solution(input);
  process.exit();
});
