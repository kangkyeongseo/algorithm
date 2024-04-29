const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const X = input;
  let n = 0;
  let sum = 0;
  let result;

  while (X > sum) {
    n++;
    sum += n;
  }

  if (n % 2 === 0) {
    result = `${n - (sum - X)}/${sum - X + 1}`;
  } else {
    result = `${sum - X + 1}/${n - (sum - X)}`;
  }
  console.log(result);
}

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
