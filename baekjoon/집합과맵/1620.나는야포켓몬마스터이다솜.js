const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const array = [];
  const map = new Map();

  for (let i = 1; i <= N; i++) {
    map.set(input[i], i);
    array.push(input[i]);
  }

  for (let j = 1; j <= M; j++) {
    if (map.get(input[j + N])) {
      console.log(map.get(input[j + N]));
    } else {
      console.log(array[input[j + N] - 1]);
    }
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
