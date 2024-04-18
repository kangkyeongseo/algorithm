const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let array = [];
  for (let i = 0; i < 10; i++) {
    const remain = input[i] % 42;
    if (!array.includes(remain)) {
      array.push(remain);
    }
  }

  console.log(array.length);
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
