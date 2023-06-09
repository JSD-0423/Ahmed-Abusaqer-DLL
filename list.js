// Node decleration
class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

// List decleration

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  //Methods

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
  }

  pop() {
    this.tail = this.tail.previous;
    this.tail.next = null;
  }

  shift() {
    this.head = this.head.next;
    this.head.previous = null;
  }

  unshift(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }

  get(index) {
    let result = this.head;
    let i = 1;
    while (i <= index && result.next) {
      result = result.next;
      i++;
    }
    return result;
  }

  set(index, value) {
    let node = this.get(index);
    node.value = value;
  }

  insert(index, value) {
    const oldNode = this.get(index);
    const node = new Node(value);
    node.previous = oldNode.previous;
    node.next = oldNode;
    oldNode.previous.next = node;
    oldNode.previous = node;
  }

  remove(index) {
    const node = this.get(index);
    node.previous.next = node.next;
    node.next.previous = node.previous;
    node.value = null;
  }

  
}
