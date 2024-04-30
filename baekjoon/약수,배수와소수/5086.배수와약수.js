const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let i = 0;
  while (true) {
    if (input[i][0] === 0 && input[i][1] === 0) break;
    const isFactor = input[i][1] % input[i][0] === 0;
    const isMultiple = input[i][0] % input[i][1] === 0;
    i++;
    if (isFactor) {
      console.log("factor");
    } else if (isMultiple) {
      console.log("multiple");
    } else {
      console.log("neither");
    }
  }
}

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
