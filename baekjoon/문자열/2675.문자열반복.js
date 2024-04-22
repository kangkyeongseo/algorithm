const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const T = Number(input[0]);

  for (let i = 0; i < T; i++) {
    let result = "";
    const testCase = input[i + 1].split(" ");
    const R = Number(testCase[0]);
    const S = testCase[1];
    for (let j = 0; j < S.length; j++) {
      result += S[j].repeat(R);
    }
    console.log(result);
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
