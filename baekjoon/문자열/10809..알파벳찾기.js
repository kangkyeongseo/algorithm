const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  //   let result = "";
  //   const S = input;
  //   const alphabet = "abcdefghijklmnopqrstuvwxyz";

  //   for (let i = 0; i < alphabet.length; i++) {
  //     result +=
  //       S.indexOf(alphabet[i]) === -1
  //         ? "-1 "
  //         : String(S.indexOf(alphabet[i])) + " ";
  //   }

  //   console.log(result.trim());

  let result = [];
  const S = input;

  for (let i = 97; i < 123; i++) {
    result.push(S.indexOf(String.fromCharCode(i)));
  }

  console.log(result.join(" "));
}

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
