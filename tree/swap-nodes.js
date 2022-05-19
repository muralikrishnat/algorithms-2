function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  
  var swapPairs = function(root) {
    let cur = root, index = 1;
    let nRoot = null, prev = null;
    while(cur) {
      let next = cur.next;
      let nn = next.next;
      if (!nRoot) {
        nRoot = next;
        next.next = cur;
      } else {
        prev.next = cur.next;
        prev.next.next = cur;
        cur.next = nn;
      }
      prev = cur;
      cur = nn;
    }
    return nRoot;
  };
  
  // [1,2,3,4]
  let root = new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(
        3,
        new ListNode(4)
      )
    )
  );
  let res = swapPairs(root);
  var printNode = (root) => {
    let res = [], head = root;
    let lIndex = 0,lMax = 5;
    while(head && lIndex < lMax) {
      res.push(head.val);
      head = head.next;
      lIndex++;
    }
    console.log(res.join(' => '));
  }
  printNode(res);