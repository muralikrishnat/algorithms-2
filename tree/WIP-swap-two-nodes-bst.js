function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  var recoverTree = function(root) {
    let que = [];
    que.push({
      node: root,
      path: [],
      lower: -Infinity,
      upper: Infinity
    });
    while(que.length > 0) {
      let { node, path, lower, upper } = que.shift();
      console.log(node.val > lower, node.val < upper, node.val, lower, upper);
      if (node.left) {
        que.push({
          node: node.left,
          path: [...path, { val: node.val, dir: 'L'}],
          lower,
          upper: node.val
        });
      }
      if (node.right) {
        que.push({
          node: node.right,
          path: [...path, { val: node.val, dir: 'R'}],
          lower : node.val,
          upper
        });
      }
    }
  };
  
  
  var root = new TreeNode(
    1,
    new TreeNode(
      3,
      null,
      new TreeNode(2)
    )
  );
  console.log(recoverTree(root));
  