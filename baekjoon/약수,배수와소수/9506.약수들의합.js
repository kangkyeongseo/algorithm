const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let i = 0;
  while (true) {
    if (input[i] === -1) break;

    const factors = [];

    for (let j = 1; j < input[i]; j++) {
      if (input[i] % j === 0) {
        factors.push(j);
      }
    }

    const sum = factors.reduce((a, b) => a + b);
    let result;

    if (sum === input[i]) {
      result = `${input[i]} = ${factors.join(" + ")}`;
      result.slice(0, -3);
    } else {
      result = `${input[i]} is NOT perfect.`;
    }
    console.log(result);
    i++;
  }
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
