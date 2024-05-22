const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

class Node {
  constructor(value) {
    this.value = value;
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

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const tempNode = this.head;
      this.head = newNode;
      tempNode.pre = newNode;
      this.head.next = tempNode;
    }
    this.lenght++;
  }

  shift() {
    if (this.lenght === 0) return -1;
    const value = this.head.value;
    if (this.lenght === 1) {
      this.init();
    } else {
      this.head = this.head.next;
      this.head.pre = null;
      this.lenght--;
    }
    return value;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const tempNode = this.tail;
      this.tail = newNode;
      tempNode.next = newNode;
      this.tail.pre = tempNode;
    }
    this.lenght++;
  }

  pop() {
    if (this.lenght === 0) return -1;
    const value = this.tail.value;
    if (this.lenght === 1) {
      this.init();
    } else {
      this.tail = this.tail.pre;
      this.tail.next = null;
      this.lenght--;
    }
    return value;
  }
}

function solution(input) {
  const N = input[0][0];
  const newDeque = new Deque();
  const result = [];

  for (let i = 1; i <= N; i++) {
    switch (input[i][0]) {
      case 1:
        newDeque.unshift(input[i][1]);
        break;
      case 2:
        newDeque.push(input[i][1]);
        break;
      case 3:
        result.push(newDeque.shift());
        break;
      case 4:
        result.push(newDeque.pop());
        break;
      case 5:
        result.push(newDeque.lenght);
        break;
      case 6:
        result.push(newDeque.lenght === 0 ? 1 : 0);
        break;
      case 7:
        result.push(newDeque.lenght === 0 ? -1 : newDeque.head.value);
        break;
      case 8:
        result.push(newDeque.lenght === 0 ? -1 : newDeque.tail.value);
        break;
    }
  }

  console.log(result.join("\n"));
}

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
