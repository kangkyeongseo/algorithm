const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  let result = "";
  const count = input;
  for (let i = 0; i < count; i++) {
    let line = "";
    for (let j = 0; j < i + 1; j++) {
      line += "*";
    }
    result += line + "\n";
  }
  console.log(result);

  //   for (let i = 0; i < count; i++) {
  //     console.log("*".repeat(i + 1));
  //   }

  //   for (let i = 0; i < count; i++) {
  //     star += "*";
  //     console.log(star);
  //   }
}

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
