function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  var countNodes = function(root) {
    if(!root) return 0;
    if(root.left && root.right) {
      let res = 0;
      var dfs = (node) => {
        let lC = node.left ? dfs(node.left) : 0;
        let rC = node.right ? dfs(node.right) : 0;
        return 1 + lC + rC;
      }
      res = dfs(root);
      return res;
    }
    if(node.left) {
      return 2;
    }
    return 1;
  };
  
  var root2 = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(
        4
      )
    ),
    new TreeNode(
      3
    )
  );
  root2 = new TreeNode(
    1,
    new TreeNode(
      2
    ),
    new TreeNode(
      3
    )
  );
  console.log(countNodes(root2));
  
  var root = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(4),
      new TreeNode(5)
    ),
    new TreeNode(
      3,
      new TreeNode(6)
    )
  );
  
  // console.log(countNodes(root));
  
  