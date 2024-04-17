const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let result = "";
  const count = input / 4;
  for (let i = 0; i < count; i++) {
    result = result.concat(" ", "long");
  }
  result = result.concat(" ", "int");
  console.log(result.trim());
}

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
