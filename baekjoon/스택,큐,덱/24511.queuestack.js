// 메모리 초과
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);
  const B = input[2].split(" ").map(Number);
  const M = Number(input[3]);
  const C = input[4].split(" ").map(Number);

  const queuestack = new Object();
  const result = [];

  for (let i = 0; i < N; i++) {
    const newObject = new Object();
    newObject["type"] = A[i] === 0 ? "Queue" : "Stack";
    newObject["array"] = new Array(1).fill(B[i]);
    new Array(1).fill(B[i]);
    queuestack[`${i}`] = newObject;
  }

  for (let i = 0; i < M; i++) {
    let number = C[i];
    for (let i = 0; i < N; i++) {
      if (queuestack[i].type === "Queue") {
        const temp = number;
        number = queuestack[i].array.pop();
        queuestack[i].array.push(temp);
      }
    }
    result.push(number);
  }
  console.log(result.join(" "));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
