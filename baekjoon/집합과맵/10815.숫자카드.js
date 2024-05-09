// 빈도수 패턴
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = Number(input[0]);
  const M = Number(input[2]);
  const NCards = input[1].split(" ").map(Number);
  const MCards = input[3].split(" ").map(Number);
  const map = new Map();
  let result = "";

  for (let i = 0; i < N; i++) {
    map.set(NCards[i], i);
  }

  for (let j = 0; j < M; j++) {
    if (map.has(MCards[j])) {
      result += 1 + " ";
    } else {
      result += 0 + " ";
    }
  }

  console.log(result);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

// 이진 탐색
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// function solution(input) {
//   const N = Number(input[0]);
//   const M = Number(input[2]);
//   const NCards = input[1].split(" ").map(Number);
//   const MCards = input[3].split(" ").map(Number);
//   let result = "";

//   NCards.sort((a, b) => a - b);

//   const binarySearch = (arr, item) => {
//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((start + end) / 2);

//     while (arr[middle] !== item && start <= end) {
//       if (arr[middle] < item) {
//         start = middle + 1;
//       } else {
//         end = middle - 1;
//       }
//       middle = Math.floor((start + end) / 2);
//     }

//     return start > end ? 0 : 1;
//   };

//   MCards.forEach((card) => {
//     result += binarySearch(NCards, card) + " ";
//   });

//   console.log(result);
// }

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   solution(input);
//   process.exit();
// });
