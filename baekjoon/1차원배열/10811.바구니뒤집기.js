const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  let array = new Array(N).fill().map((_, index) => index + 1);

  for (let i = 0; i < M; i++) {
    const [start, end] = input[i + 1].split(" ").map(Number);
    let targetArray = [];
    for (let j = end; j >= start; j--) {
      targetArray.push(array[j - 1]);
    }
    array = [...array.slice(0, start - 1), ...targetArray, ...array.slice(end)];
  }

  console.log(array.join(" "));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
