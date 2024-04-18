const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let array = new Array(30).fill().map((_, index) => index + 1);

  for (let i = 0; i < 28; i++) {
    const student = input[i];
    array = array.filter((item) => item !== student);
  }

  console.log(array[0]);
  console.log(array[1]);
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
