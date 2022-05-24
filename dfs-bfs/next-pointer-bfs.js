function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  };
  
  var connect = function(root) {
    if(!root) return root;
    let que = [];
    let isShift = true, pointer = null, curLevel = null;
    que.push({
      node: root,
      level: 0
    });
    while(que.length > 0) {
      let { node, level } = que.shift();
      if (level !== curLevel) {
        curLevel = level;
        node.next = null;
        pointer = node;
      } else {
        node.next = pointer;
        pointer = node;
      }
      if (node.right) {
        que.push({
          node: node.right,
          level: level + 1
        });
      }
      if (node.left) {
        que.push({
          node: node.left,
          level: level + 1
        });
      }
    }
    return root;
  };
  
  
  var input = new Node(
    1,
    new Node(
      2,
      new Node(4, new Node(7)),
      new Node(5)
    ),
    new Node(
      3,
      null,
      new Node(6, new Node(8))
    )
  );
  console.log(connect(input));