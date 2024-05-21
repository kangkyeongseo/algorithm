const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const inputArray = [];
  const outputArray = [];
  const result = [];

  for (let i = 1; i <= N; i++) {
    const line = input[i].split(" ");

    switch (line[0]) {
      case "push":
        inputArray.push(line[1]);
        break;
      case "pop":
        if (outputArray.length === 0) {
          while (inputArray.length > 0) {
            outputArray.push(inputArray.pop());
          }
        }
        outputArray.length > 0
          ? result.push(outputArray.pop())
          : result.push(-1);
        break;
      case "size":
        result.push(inputArray.length + outputArray.length);
        break;
      case "empty":
        if (inputArray.length === 0 && outputArray.length === 0) {
          result.push(1);
        } else {
          result.push(0);
        }
        break;
      case "front":
        if (outputArray.length === 0) {
          while (inputArray.length > 0) {
            outputArray.push(inputArray.pop());
          }
        }
        outputArray.length > 0
          ? result.push(outputArray[outputArray.length - 1])
          : result.push(-1);
        break;
      case "back":
        inputArray.length > 0
          ? result.push(inputArray[inputArray.length - 1])
          : outputArray.length > 0
          ? result.push(outputArray[0])
          : result.push(-1);
        break;
    }
  }

  console.log(result.join("\n"));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
