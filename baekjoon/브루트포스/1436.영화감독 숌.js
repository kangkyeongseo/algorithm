const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  //   const N = input;
  //   const titles = [];
  //   let index = 0;

  //   for (let i = 666; index !== N; i++) {
  //     const title = i.toString();
  //     let continuity = 0;
  //     for (let j = 0; j < title.length; j++) {
  //       if (title[j] === "6") {
  //         continuity++;
  //         if (continuity === 3) {
  //           titles.push(title);
  //           index++;
  //           break;
  //         }
  //       } else {
  //         continuity = 0;
  //       }
  //     }
  //   }

  //   console.log(titles[titles.length - 1]);

  let num = 666;
  let count = 1;

  while (count !== N) {
    num++;
    if (String(num).includes("666")) count++;
  }

  console.log(num);
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
