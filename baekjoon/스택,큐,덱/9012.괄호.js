const { link } = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const T = Number(input[0]);

  for (let i = 1; i <= T; i++) {
    const data = input[i].split("");
    const array = [];
    let isVPS = true;
    for (let j = 0; j < data.length; j++) {
      switch (data[j]) {
        case "(":
          array.push(1);
          break;
        case ")":
          if (array.length === 0) {
            isVPS = false;
          } else {
            array.pop();
          }
          break;
      }
    }
    if (!isVPS) {
      console.log("NO");
    } else if (array.length > 0) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
