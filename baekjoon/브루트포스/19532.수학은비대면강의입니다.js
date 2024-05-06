const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const [a, b, c, d, e, f] = input;
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        console.log(`${x} ${y}`);
        break;
      }
    }
  }
}

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
