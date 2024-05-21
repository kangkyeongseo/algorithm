const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let index = 0;
  while (input[index][0] !== ".") {
    const message = input[index];
    let order = 0;
    let isBalance = true;
    const array = [];

    while (message[order] !== ".") {
      if (!isBalance) break;

      switch (message[order]) {
        case "(":
          array.push(1);
          break;
        case ")":
          if (array.length === 0) {
            isBalance = false;
          } else if (array[array.length - 1] !== 1) {
            isBalance = false;
          } else {
            array.pop();
          }
          break;
        case "[":
          array.push(2);
          break;
        case "]":
          if (array.length === 0) {
            isBalance = false;
          } else if (array[array.length - 1] !== 2) {
            isBalance = false;
          } else {
            array.pop();
          }
          break;
      }
      order++;
    }

    if (!isBalance) {
      console.log("no");
    } else if (array.length === 0) {
      console.log("yes");
    } else {
      console.log("no");
    }

    index++;
  }
}

rl.on("line", function (line) {
  input.push(line.split(""));
}).on("close", function () {
  solution(input);
  process.exit();
});
