function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  };
  
  var connect = function(root) {
    var dfs = (node, lastPointer) => {
      node.next = lastPointer;
      if(node.right) {
        let lp = lastPointer;
        if(lp) {
          lp = lp.left;
        }
        dfs(node.right, lp);
      }
      if (node.left) {
        dfs(node.left, node.right);
      }
    }
    dfs(root, null);
  };
  
  
  var input = new Node(
    1,
    new Node(
      2,
      new Node(4),
      new Node(5)
    ),
    new Node(
      3,
      new Node(6),
      new Node(7)
    )
  );
  console.log(connect(input));