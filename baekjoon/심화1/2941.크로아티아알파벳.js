const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let word = input;
  const croatiaArray = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  croatiaArray.forEach((croatiaalphabet) => {
    while (word.includes(croatiaalphabet)) {
      word = word.replace(croatiaalphabet, " ");
    }
  });

  console.log(word.length);
}

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
