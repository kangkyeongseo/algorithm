const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  const N = input[0];

  for (let i = 1; i <= N; i++) {
    const [A, B] = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    let start = Math.ceil(B / A);
    while (true) {
      if ((A * start) % B === 0) {
        console.log(A * start);
        break;
      }
      start += 1;
    }
  }

  // 유클리드 호제법을 활용하면 더 쉽게 풀 수 있다
  // GCD(최대공약수)
  // LCM(최대공배수)
  // function getGCD(a,b){
  //     if(b===0){
  //         return a;
  //     }
  //     return getGCD(b,a%b);
  // }
  // const GCP=getGCD(A,B);
  // const LCM=(A*B)/GCP;
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
