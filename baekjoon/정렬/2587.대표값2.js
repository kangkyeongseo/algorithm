const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const array = input;
  let sum = 0;

  for (let i = 0; i < 5; i++) {
    let index = i;
    let temp;
    for (let j = 1 + i; j < 5; j++) {
      if (array[index] > array[j]) {
        index = j;
      }
    }
    temp = array[i];
    array[i] = array[index];
    array[index] = temp;
    sum += array[i];
  }

  console.log(sum / 5);
  console.log(array[2]);
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
