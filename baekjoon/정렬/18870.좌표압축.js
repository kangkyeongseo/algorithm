const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = input[0];
  let array = input[1].split(" ").map(Number);
  const set = new Set(array);
  const newArray = Array.from(set);

  newArray.sort((a, b) => a - b);

  let orderArray = {};
  let result = "";

  newArray.forEach((number, index) => (orderArray[number] = index));

  for (let i = 0; i < N; i++) {
    result += orderArray[array[i]] + " ";
  }

  console.log(result);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
