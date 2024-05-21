const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const array = input[1].split(" ").map(Number);
  const stayArray = [];
  let index = 1;

  while (array.length !== 0) {
    if (array[0] === index) {
      array.shift();
      index++;
    } else if (stayArray[stayArray.length - 1] === index) {
      stayArray.pop();
      index++;
    } else {
      stayArray.push(array.shift());
    }
  }

  let isNice = true;
  for (let i = 0; i < stayArray.length; i++) {
    if (stayArray[i] !== N - i) {
      isNice = false;
      break;
    }
  }

  console.log(isNice ? "Nice" : "Sad");
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
