const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const array = new Array(N).fill().map((_, index) => index + 1);

  for (let i = 0; i < M; i++) {
    const [iBox, jBox] = input[i + 1].split(" ").map(Number);
    const iBall = array[iBox - 1];
    const jBall = array[jBox - 1];
    array[iBox - 1] = jBall;
    array[jBox - 1] = iBall;
  }

  console.log(array.join(" "));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
