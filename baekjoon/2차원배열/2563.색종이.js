const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const arr = Array.from(Array(100), () => Array(100).fill(0));
  let result = 0;
  for (let i = 0; i < N; i++) {
    const [x, y] = input[i + 1].split(" ").map(Number);
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        if (arr[x + j][y + k] === 0) {
          arr[x + j][y + k] = 1;
          result++;
        }
      }
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
