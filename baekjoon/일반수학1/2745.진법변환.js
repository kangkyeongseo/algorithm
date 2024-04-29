const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let result = 0;
  const N = input[0]
    .split("")
    .map((item) => {
      if (item.charCodeAt() > 57) {
        return item.charCodeAt() - 55;
      } else {
        return Number(item);
      }
    })
    .reverse();
  const B = Number(input[1]);

  for (let i = 0; i < N.length; i++) {
    result += N[i] * B ** i;
  }

  console.log(result);
}

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
