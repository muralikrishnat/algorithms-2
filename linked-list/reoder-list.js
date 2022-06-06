function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  var reorderList = function(head) {
    let cur = head, nodes = [];
    let len = 0;
    while(cur) {
      let next = cur.next;
      cur.next = null;
      nodes.push(cur);
      len++;
      cur = next;
    }
    let start = 0, end = len - 1, prev = null;
    while(start <= end) {
      let n1 = nodes[start];
      let n2 = nodes[end];
      if(start === end) {
        prev.next = n1;
      } else {
        if(prev) {
          n1.next = n2;
          prev.next = n1;
        } else {
          n1.next = n2;
        }
      }
      prev = n2;
      start++;
      end--;
    }
    return head;
  };
  
  var input = new ListNode(
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
  var input2 = new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(
        3,
        new ListNode(
          4
        )
      )
    )
  );
  var out = reorderList(input);
  var out2 = reorderList(input2);
  var printList = (root) => {
    let cur = root;
    let path = [];
    while(cur) {
      path.push(cur.val);
      cur = cur.next;
    }
    console.log(path.join(' => '));
  }
  printList(out);
  
  