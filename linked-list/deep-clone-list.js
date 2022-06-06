function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
  };
  var copyRandomList = function(head) {
    let prev = null, cur = head, root = null;
    let nodeMap = new Map();
    while(cur) {
      let node = new Node(cur.val, null, null);
      nodeMap.set(cur, node);
      if(!root) {
        root = node;
      }
      if(prev) {
        prev.next = node;
      }
      prev = node;
      cur = cur.next;
    }
    cur = head;
    let ncur = root;
    while(cur) {
      if(cur.random) {
        ncur.random = nodeMap.get(cur.random);
      }
      cur = cur.next;
      ncur = ncur.next;
    }
    return root;
  };
  
  
  /*
  [[7,null],[13,0],[11,4],[10,2],[1,0]]
  */
  let n7 = new Node(7);
  let n13 = new Node(13);
  let n11 = new Node(11);
  let n10 = new Node(10);
  let n1 = new Node(1);
  n7.next = n13;
  n7.random = null;
  n13.next = n11;
  n13.random = n7;
  n11.next = n10;
  n11.random = n1;
  n10.next = n1;
  n10.random = n11;
  n1.next = null;
  n1.random = n7;
  
  var input = n7;
  let out = copyRandomList(input);
  
  var printList = (root) => {
    let path = [], head = root;
    while(head) {
      path.push(head.val);
      console.log(head.val, head.random);
      head = head.next;
    }
    console.log(path.join(' => '));
  }
  printList(out);