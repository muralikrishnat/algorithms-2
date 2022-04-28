function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  
  var levelOrder = function(root) {
    if(!root) return [];
  
    let que = [], res = [];
    que.push({
      node: root,
      level: 0,
      dir: true
    });
    while(que.length > 0) {
      let { node, level, dir } = que.pop();
      if (!res[level]) {
        res[level] = [];
      }
      if (node.right) {
        que.push({
          node: node.right,
          level: level + 1,
          dir: !dir
        });
      }
      if (node.left) {
        que.push({
          node: node.left,
          level: level + 1,
          dir: !dir
        });
      }
      if (dir) {
        res[level].push(node.val);
      } else {
        res[level].unshift(node.val);
      }
    }
    return res;
  };
  
  var root = new TreeNode(
    5, 
    new TreeNode(
      4, 
      new TreeNode(
        11, 
        new TreeNode(7),
        new TreeNode(2)
      )
    ),
    new TreeNode(
      8, 
      new TreeNode(13),
      new TreeNode(
        4, 
        null,
        new TreeNode(1)
      )
    )
  );
  
  console.log(levelOrder(root));