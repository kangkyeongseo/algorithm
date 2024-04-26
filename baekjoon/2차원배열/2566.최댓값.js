const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let max = 0;
  let n = 1;
  let m = 1;
  for (let i = 0; i < 9; i++) {
    const line = input[i].split(" ").map(Number);
    for (let j = 0; j < 9; j++) {
      if (max < line[j]) {
        max = line[j];
        n = i + 1;
        m = j + 1;
      }
    }
  }
  console.log(max + "\n" + n + " " + m);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
