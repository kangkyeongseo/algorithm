const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = input[0];
  input.shift();
  input.sort((a, b) => a - b);
  console.log(input.join("\n"));
}

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});

// 병합정렬
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// function merge(left, right) {
//   const newArray = [];
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       newArray.push(left.shift());
//     } else {
//       newArray.push(right.shift());
//     }
//   }
//   return [...newArray, ...left, ...right];
// }

// function mergeSort(array) {
//   if (array.length === 1) return array;
//   const boundary = Math.floor(array.length / 2);
//   const left = array.slice(0, boundary);
//   const right = array.slice(boundary);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function solution(input) {
//   const N = input[0];
//   input.shift();

//   const sortedArray = mergeSort(input);
//   console.log(sortedArray.forEach((element) => console.log(element)));
// }

// rl.on("line", function (line) {
//   input.push(Number(line));
// }).on("close", function () {
//   solution(input);
//   process.exit();
// });
