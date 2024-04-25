const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function solution(input) {
  const word = input.toUpperCase().split("");
  const alphabets = {};

  for (let i = 0; i < word.length; i++) {
    alphabets[word[i]] ? (alphabets[word[i]] += 1) : (alphabets[word[i]] = 1);
  }

  const keyArray = Object.keys(alphabets);
  const valuesArray = Object.values(alphabets);
  const maxValue = Math.max(...valuesArray);
  const index = valuesArray.indexOf(maxValue);
  const lastIndex = valuesArray.lastIndexOf(maxValue);

  if (index !== lastIndex) {
    console.log("?");
  } else {
    console.log(keyArray[index]);
  }

  //   const word = input.toUpperCase().split("");
  //   const alphabetArray = new Set(word);
  //   while (word.length > 1) {
  //     alphabetArray.forEach((alphabet) => {
  //       const wordIndex = word.indexOf(alphabet);
  //       if (wordIndex >= 0) {
  //         word.splice(wordIndex, 1);
  //       } else {
  //         alphabetArray.delete(alphabet);
  //       }
  //     });
  //   }
  //   console.log(word.length > 0 ? word[0] : "?");
}

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
