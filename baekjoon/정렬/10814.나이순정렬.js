const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = input[0];
  input.shift();

  input.sort((a, b) => {
    const A = a.split(" ");
    const B = b.split(" ");
    if (Number(A[0]) !== Number(B[0])) {
      return Number(A[0]) - Number(B[0]);
    } else {
      return 0;
    }
  });

  console.log(input.join("\n"));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
