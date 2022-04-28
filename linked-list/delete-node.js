
var printNode = (head) => {
    let printStr = [];
    while(head) {
      printStr.push(head.val);
      head = head.next;
    }
    console.log(printStr.join(' => '));
  }
  
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  var removeNthFromEnd = function(head, n) {
    let curNode = head;
    let nodeStack = [];
    while(curNode) {
      nodeStack.unshift(curNode);
      if (!curNode.next) {
        if (n === nodeStack.length) {
          if (n === 1) {
            head = null;
          } else {
            head = nodeStack[n - 2];
          }
        } else {
          if (n < nodeStack.length) {
            nodeStack[n].next = nodeStack[n - 2];
          } else {
            head = null;
          }
        }
      }
      curNode = curNode.next;
    }
    return head;
  };
  
  
  let rootNode = new ListNode(
    1,
    new ListNode(
      2, 
      new ListNode(
        3, 
        new ListNode(
          4,
          new ListNode(5)
        )
      )
    )
  );
  let rootNode2 = new ListNode(
    1,
    new ListNode(
      2
    )
  );
  let rootNode3 = new ListNode(
    1
  );
  
  printNode(removeNthFromEnd(rootNode2, 2));
  printNode(removeNthFromEnd(rootNode2, 1));
  printNode(removeNthFromEnd(rootNode3, 1));
  
  
  
  
  