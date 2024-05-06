const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const paintCase = [];

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let firstColor;
      let firstColorPaint = 0;
      let SecondColorPaint = 0;
      for (let x = 0; x < 8; x++) {
        const line = input[x + i + 1].split("");
        for (let y = 0; y < 8; y++) {
          if (!firstColor) {
            firstColor = line[y + j];
          }
          switch (x % 2) {
            case 0:
              if (y % 2 === 0 && line[y + j] !== firstColor) {
                firstColorPaint++;
              }
              if (y % 2 === 0 && line[y + j] === firstColor) {
                SecondColorPaint++;
              }
              if (y % 2 === 1 && line[y + j] === firstColor) {
                firstColorPaint++;
              }
              if (y % 2 === 1 && line[y + j] !== firstColor) {
                SecondColorPaint++;
              }
              break;
            case 1:
              if (y % 2 === 0 && line[y + j] === firstColor) {
                firstColorPaint++;
              }
              if (y % 2 === 0 && line[y + j] !== firstColor) {
                SecondColorPaint++;
              }
              if (y % 2 === 1 && line[y + j] !== firstColor) {
                firstColorPaint++;
              }
              if (y % 2 === 1 && line[y + j] === firstColor) {
                SecondColorPaint++;
              }
              break;
          }
        }
      }
      paintCase.push(
        firstColorPaint < SecondColorPaint ? firstColorPaint : SecondColorPaint
      );
    }
  }
  paintCase.sort((a, b) => a - b);
  console.log(paintCase[0]);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
