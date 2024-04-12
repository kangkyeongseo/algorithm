const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let result;
  let duplicateNumber;
  let biggestNumber;

  const array = [...new Set(input)];

  switch (array.length) {
    case 1:
      result = 10000 + array[0] * 1000;
      break;
    case 2:
      duplicateNumber = input.filter(function (number, index) {
        return array.indexOf(number) !== index;
      });
      result = 1000 + duplicateNumber[0] * 100;
      break;
    case 3:
      biggestNumber = Math.max(...input);
      result = biggestNumber * 100;
      break;
  }

  console.log(result);
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
