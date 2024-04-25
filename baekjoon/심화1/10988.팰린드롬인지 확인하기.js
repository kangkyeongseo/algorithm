const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let result = 0;
  const word = input;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      result += 1;
      break;
    }
  }
  console.log(result === 1 ? 0 : 1);
}

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
