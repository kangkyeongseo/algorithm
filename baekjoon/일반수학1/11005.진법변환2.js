const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  //   const N = Number(input[0]);
  //   const B = Number(input[1]);

  //   const result = N.toString(B).toUpperCase();

  //   console.log(result);

  //   let size = 0;
  //   const result = [];
  //   const N = Number(input[0]);
  //   const B = Number(input[1]);
  //   let remain = N;

  //   while (N >= B ** size) {
  //     size++;
  //   }

  //   for (let i = 0; i < size; i++) {
  //     result.push(
  //       remain / B ** (size - 1 - i) > 10
  //         ? String.fromCharCode(Math.floor(remain / B ** (size - 1 - i)) + 55)
  //         : Math.floor(remain / B ** (size - 1 - i))
  //     );
  //     remain = remain % B ** (size - 1 - i);
  //   }
  //   console.log(result.join(""));

  while (true) {
    const num = N % B;

    str = (num < 10 ? num : String.fromCharCode(num + 55)) + str;

    N = Math.floor(N / B);

    if (N === 0) {
      break;
    } else if (N < B) {
      str = (N < 10 ? N : String.fromCharCode(N + 55)) + str;
      break;
    }
  }
}

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
