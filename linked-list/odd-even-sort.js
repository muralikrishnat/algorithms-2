function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  var oddEvenList = function(head) {
    let node = head, evenNode = null, eNode = null;
    while(node) {
      let n = node.next;
      let nn = null;
      if(n) {
        nn = n.next;
      }
      if(!eNode) {
        eNode = node.next;
        evenNode = eNode;
      } else {
        eNode.next = node.next;
        eNode = eNode.next;
      }
      node.next = nn;
      if(!n) {
        node.next = evenNode;
      } else {
        if(!nn) {
          node.next = evenNode;
        }
      }
      node = nn;
    }
    return head;
  };
  
  var printList = (root) => {
    let node = root, list = [];
    while(node) {
      list.push(node.val);
      node = node.next;
    }
    console.log(list.join(' => '));
  }
  
  var input = new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(
        3,
        new ListNode(
          4,
          new ListNode(
            5,
            new ListNode(6)
          )
        )
      )
    )
  );
  
  printList(input);
  printList(oddEvenList(input));
  