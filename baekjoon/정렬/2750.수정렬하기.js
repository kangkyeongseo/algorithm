const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = input[0];
  const arrary = input.slice(1, N + 1);

  //   for (let i = 0; i < N; i++) {
  //     let index = i;
  //     let temp;
  //     for (let j = i + 1; j < N; j++) {
  //       if (arrary[index] > arrary[j]) {
  //         index = j;
  //       }
  //     }
  //     temp = arrary[index];
  //     arrary[index] = arrary[i];
  //     arrary[i] = temp;
  //   }
  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N - i; j++) {
      if (arrary[j - 1] > arrary[j]) {
        const temp = arrary[j - 1];
        arrary[j - 1] = arrary[j];
        arrary[j] = temp;
      }
    }
  }

  console.log(arrary.join("\n"));
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
