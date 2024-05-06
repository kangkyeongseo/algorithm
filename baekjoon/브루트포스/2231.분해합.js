const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const N = input;
  let index = N;

  while (true) {
    const number = index.toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += Number(number[i]) * 10 ** (number.length - i - 1);
      sum += Number(number[i]);
    }
    if (sum === N) {
      console.log(index);
      break;
    }
    if (index === N) {
      console.log(0);
      break;
    }
    index++;
  }
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
