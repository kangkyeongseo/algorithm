const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  let result = 0;

  for (let i = 0; i < N; i++) {
    let alphabets = new Array(26).fill(0);
    const word = input[i + 1].split("");
    let preItem;

    for (const item in word) {
      if (preItem !== word[item]) {
        alphabets[word[item].codePointAt() - 97] += 1;
      }
      preItem = word[item];
    }

    alphabets = alphabets.filter((item) => item > 1);
    if (alphabets.length === 0) result += 1;
  }

  console.log(result);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
