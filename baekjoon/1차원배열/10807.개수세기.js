const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let result = 0;
  const arrayLength = Number(input[0]);
  const array = input[1].split(" ").map(Number);
  const targetInter = Number(input[2]);

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] === targetInter) {
      result++;
    }
  }
  console.log(result);
}

// function solution(input) {
//   const array = input[1].split(" ").map(Number);
//   const targetInter = Number(input[2]);
//   const newArray = array.filter((item) => item === targetInter);
//   console.log(newArray.length);
// }

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
