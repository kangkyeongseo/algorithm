// 메모리 초과
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

class Node {
  constructor(value, card) {
    this.value = value;
    this.card = card;
    this.pre = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.init();
  }

  init() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }

  push(value, card) {
    const newNode = new Node(value, card);
    if (this.lenght === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.tail;
      this.tail = newNode;
      this.tail.pre = temp;
      this.tail.next = this.head;
      this.head.pre = this.tail;
      temp.next = this.tail;
    }
    this.lenght++;
  }

  goRight() {
    this.head = this.head.next;
    this.tail = this.tail.next;
  }

  goLeft() {
    this.head = this.head.pre;
    this.tail = this.tail.pre;
  }

  pop() {
    this.head.pre.next = this.head.next;
    this.head.next.pre = this.head.pre;
    this.lenght--;
    return [this.head.value, this.head.card];
  }
}

function solution(input) {
  const N = Number(input[0]);
  const cards = input[1].split(" ").map(Number);
  const newDeque = new Deque();
  const result = [];

  for (let i = 0; i < N; i++) {
    newDeque.push(i + 1, cards[i]);
  }

  while (newDeque.lenght !== 1) {
    const target = newDeque.pop();
    const cardNumber = target[1];
    result.push(target[0]);
    if (cardNumber > 0) {
      for (let i = 0; i < cardNumber; i++) {
        newDeque.goRight();
      }
    } else {
      for (let i = 0; i > cardNumber; i--) {
        newDeque.goLeft();
      }
    }
  }
  result.push(newDeque.head.value);
  console.log(result.join(" "));
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
