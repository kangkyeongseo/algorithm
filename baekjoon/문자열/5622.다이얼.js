const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let result = 0;
  const word = input;
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt(0) === 90) {
      result += 10;
    } else if (word[i].charCodeAt(0) > 82) {
      result += Math.ceil((word[i].charCodeAt(0) - 80) / 3) + 7;
    } else {
      result += Math.ceil((word[i].charCodeAt(0) - 64) / 3) + 2;
    }
  }
  console.log(result);
}

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
