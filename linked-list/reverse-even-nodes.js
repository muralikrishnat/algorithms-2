class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
    }
  }
  
  function reverse(head) {
    let lastEvenNode = null, prevNode = null;
    let evenStacks = [], rootNode = null, isFirstEven = false;
    let stackIndex = null, stackPrevNodes = [];
    let isLastNodeEven = false;
    while(head) {
      let isEven = head.data % 2 === 0;
      if(isEven) {
        if (!prevNode) {
          isFirstEven = true;
        }
        if (!isLastNodeEven) {
          isLastNodeEven = true;
          if (evenStacks.length === 0) {
            stackIndex = 0;
            stackPrevNodes.push(prevNode);
          } else {
            stackIndex += 1;
            stackPrevNodes.push(prevNode);
          }
          evenStacks[stackIndex] = [];
        }
        evenStacks[stackIndex].push(head);
      } else {
        isLastNodeEven = false;
        if(!rootNode) {
          rootNode = head;
        }
      }
      prevNode = head;
      head = head.next;
    }
    // console.log(evenStacks, isFirstEven, rootNode);
    if (isFirstEven) {
      for(let i = 0; i < evenStacks.length; i++) {
        let stack = evenStacks[i];
        let nextPointer = stack[stack.length - 1].next;
        for(let j = stack.length - 1; j >= 0; j--) {
          console.log(stack[j]);
        }
      }
    } else {
      for(let i = 0; i < evenStacks.length; i++) {
        let stack = evenStacks[i];
        let lastPointer = stackPrevNodes[i];
  
        let nextPointer = stack[stack.length - 1].next;
        for(let j = stack.length - 1; j >= 0; j--) {
          if (lastPointer) {
            lastPointer.next = stack[j];
            lastPointer = stack[j];
          }
        }
        if (lastPointer) {
          lastPointer.next = nextPointer;
        }
      }
    }
  
    return rootNode;
  }
  
  function createLinkedList(arr) {
    var head = null;
    var tempHead = head;
    for (var v of arr) {
      if (head == null) {
        head = new Node(v);
        tempHead = head;
      } else {
        head.next = new Node(v);
        head = head.next;
      }
    }
    return tempHead;
  }
  var printNode = (head) => {
    let nodes= [];
    let loopIndex =0, loopLimit = 10;
    while(head && loopIndex < loopLimit) {
      nodes.push(head.data);
      head = head.next;
  
      loopIndex++;
    }
    console.log(nodes.join(' => '));
  }
  var head_1 = createLinkedList([2, 6, 8, 9, 12, 16]);
  var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
  printNode(reverse(head_1));
  