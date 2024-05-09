// 빈도수 패턴
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const [ALength, BLength] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);
  const B = input[2].split(" ").map(Number);
  const AMap = new Map();
  const BMap = new Map();

  for (let i = 0; i <= ALength; i++) {
    AMap.set(A[i]);
  }
  for (let i = 0; i <= BLength; i++) {
    BMap.set(B[i]);
  }

  for (let i = 0; i <= BLength; i++) {
    if (AMap.has(B[i])) {
      AMap.delete(B[i]);
    }
  }

  for (let i = 0; i <= ALength; i++) {
    if (BMap.has(A[i])) {
      BMap.delete(A[i]);
    }
  }

  //   console.log(AMap.size + BMap.size);

  //   const list1 = input[1].split(" ");
  //   const list2 = input[2].split(" ");

  //   const set1 = new Set(list1);
  //   for (let i = 0; i < list2.length; i++) {
  //     set1.delete(list2[i]);
  //   }

  //   const set2 = new Set(list2);
  //   for (let i = 0; i < list1.length; i++) {
  //     set2.delete(list1[i]);
  //   }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
