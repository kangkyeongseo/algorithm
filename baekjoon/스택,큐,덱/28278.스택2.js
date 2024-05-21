const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const array = [];
  let result = "";

  for (let i = 1; i <= N; i++) {
    const order = input[i].split(" ").map(Number);
    switch (order[0]) {
      case 1:
        array.push(order[1]);
        break;
      case 2:
        if (array.length > 0) {
          result += array.pop() + "\n";
        } else {
          result += -1 + "\n";
        }
        break;
      case 3:
        result += array.length + "\n";
        break;
      case 4:
        if (array.length > 0) {
          result += 0 + "\n";
        } else {
          result += 1 + "\n";
        }
        break;
      case 5:
        if (array.length > 0) {
          result += array[array.length - 1] + "\n";
        } else {
          result += -1 + "\n";
        }
        break;
    }
  }

  console.log(result);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
