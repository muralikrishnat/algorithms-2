function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  
  var rotateRight = function(head, k) {
    let t = 0;
    while(head) {
      t++;
      head = head.next;
    }
    k = k % t;
    console.log('rotations: ', k)
    return head;
  };
  
  let input = new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(
        3,
        new ListNode(
          4,
          new ListNode(
            5
          )
        )
      )
    )
  );
  
  var printTree = (head) => {
    let outStr = [];
    while(head) {
      outStr.push(head.val);
      head = head.next;
    }
    console.log(outStr.join(' => '));
  }
  printTree(rotateRight(input, 2));
  