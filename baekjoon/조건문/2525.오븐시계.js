const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

function solution(input) {
  let result;

  const currentTime = input[0].split(" ").map(Number);
  const cookingTime = Number(input[1]);

  const hour = currentTime[0];
  const min = currentTime[1];

  if (min + cookingTime >= 60) {
    const overHour = Math.floor((min + cookingTime) / 60);
    result = `${
      hour + overHour >= 24 ? hour + overHour - 24 : hour + overHour
    } ${min + cookingTime - 60 * overHour}`;
  } else {
    result = `${hour} ${min + cookingTime}`;
  }

  console.log(result);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
