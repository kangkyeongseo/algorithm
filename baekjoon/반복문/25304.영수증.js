const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let calcuCost = 0;
  const totalCost = Number(input[0]);
  const itemNumber = Number(input[1]);

  for (let i = 1; i < itemNumber + 1; i++) {
    const item = input[i + 1].split(" ").map(Number);
    const itemCost = item[0];
    const itemCount = item[1];

    calcuCost = calcuCost + itemCost * itemCount;
  }

  console.log(calcuCost === totalCost ? "Yes" : "No");
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
