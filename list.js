// Node decleration
class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

// List decleration

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //Methods

  print() {
    document.write("The Elements in the Doubly Linked List are :</br> ");
    let current = this.head;
    while (current) {
       document.write(
          `${current.previous?.value}   ${current.value}   ${current.next?.value} <==> `
       );
       current = current.next; 
    }
 }

  push(value) {
    this.size++;
    const node = new Node(value);
    // list is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else 
    // if list is not empty
    {
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
