const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(input) {
  let sum = 0;
  let count = 0;
  const point = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };
  for (let i = 0; i < 20; i++) {
    const grade = input[i].split(" ");
    if (grade[2] !== "P") {
      sum = sum + Number(grade[1]) * point[grade[2]];
      count += Number(grade[1]);
    }
  }
  console.log((sum / count).toFixed(6));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

const items = [
  "ObjectOrientedProgramming1 3.0 F",
  "IntroductiontoComputerEngineering 3.0 F",
  "ObjectOrientedProgramming2 3.0 F",
  "CreativeComputerEngineeringDesign 3.0 F",
  "AssemblyLanguage 3.0 F",
  "InternetProgramming 3.0 F",
  "ApplicationProgramminginJava 3.0 F",
  "SystemProgramming 3.0 F",
  "OperatingSystem 3.0 F",
  "WirelessCommunicationsandNetworking 3.0 F",
  "LogicCircuits 3.0 F",
  "DataStructure 4.0 F",
  "MicroprocessorApplication 3.0 F",
  "EmbeddedSoftware 3.0 F",
  "ComputerSecurity 3.0 F",
  "Database 3.0 F",
  "Algorithm 3.0 F",
  "CapstoneDesigninCSE 3.0 F",
  "CompilerDesign 3.0 F",
  "ProblemSolving 4.0 F",
];
