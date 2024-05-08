const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = input[0];
  input.shift();
  const set = new Set(input);
  const array = Array.from(set);

  array.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      let index;
      for (let i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
          index = i;
          break;
        }
      }
      return a.charCodeAt(index) - b.charCodeAt(index);
    }
  });

  console.log(array.join("\n"));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
