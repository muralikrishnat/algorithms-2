function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  
  var rotateRight = function(head, k) {
    let t = 0, ns = [];
    if(!head) return head;
    if(k === 0) return head;
    let cur = head;
    while(cur) {
      ns.push(cur);
      t++;
      cur = cur.next;
    }
    k = k % t;
    if (k === 0) return head;
    let p2 = ns.slice(0, t - k);
    let p1 = ns.slice(t - k);
    p1[p1.length - 1].next = p2[0];
    p2[p2.length - 1].next = null;
    return p1[0];
  };
  
  let input = new ListNode(
    1
  );
  
  var printTree = (head) => {
    let outStr = [];
    while(head) {
      outStr.push(head.val);
      head = head.next;
    }
    console.log(outStr.join(' => '));
  }
  printTree(rotateRight(input, 1));
  