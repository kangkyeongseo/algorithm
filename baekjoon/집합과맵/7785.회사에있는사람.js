const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const n = Number(input[0]);
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const log = input[i + 1].split(" ");
    if (log[1] === "enter") {
      map.set(log[0], log[0]);
    } else {
      map.delete(log[0]);
    }
  }

  const workers = [];
  map.forEach((worker) => workers.push(worker));
  workers.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(workers.join("\n"));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
