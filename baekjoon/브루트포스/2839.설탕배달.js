const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  //   const N = input;
  //   let remain = N % 5;
  //   let maxY = Math.floor(N / 5);
  //   if (remain === 0) {
  //     console.log(maxY);
  //     return;
  //   }
  //   if (remain === 3) {
  //     console.log(maxY + 1);
  //     return;
  //   }
  //   if (N < 5) {
  //     console.log(-1);
  //     return;
  //   }
  //   while (true) {
  //     maxY -= 1;
  //     remain += 5;
  //     if (remain % 3 === 0) {
  //       console.log(maxY + remain / 3);
  //       break;
  //     }
  //     if (maxY === 0) {
  //       console.log(-1);
  //       break;
  //     }
  //   }

  let N = input;
  let result = 0;
  let isOk = false;

  while (N >= 0) {
    if (N % 5 === 0) {
      isOk = true;
      result += N / 5;
      console.log(result);
      break;
    } else {
      N -= 3;
      result += 1;
    }
  }

  if (!isOk) console.log(-1);
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
