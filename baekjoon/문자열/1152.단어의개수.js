const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const words = input.trim().split(" ");
  if (words.length === 1 && words[0].length === 0) {
    console.log(0);
  } else {
    console.log(words.length);
  }
}

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
