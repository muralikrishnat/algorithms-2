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
  var rob = function(root) {
    var dfs = (node) => {
      if(!node) return [0,0];
      let [lSum, lSum1] = dfs(node.left);
      let [rSum, rSum1] = dfs(node.right);
      let val = node.val;
      let set1 = lSum + rSum;
      let set2 = val + lSum1 + rSum1;
      let set3 = lSum + rSum1;
      let set4 = lSum1 + rSum;
      return [set2, Math.max(lSum, lSum1) + Math.max(rSum, rSum1)];
    };
    return Math.max(...dfs(root));
  };
  
  var input = new TreeNode(
    3,
    new TreeNode(
      4,
      new TreeNode(1),
      new TreeNode(3)
    ),
    new TreeNode(
      5,
      null, 
      new TreeNode(1)
    )
  );
  console.log(rob(input));