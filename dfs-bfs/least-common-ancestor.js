function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  /**
   * Definition for a binary tree node.
   * function TreeNode(val) {
   *     this.val = val;
   *     this.left = this.right = null;
   * }
   */
  /**
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  
  var lowestCommonAncestor = function(root, p, q) {
    var dfs = (node) => {
      let count = 0;
      let val = node.val;
      if(val === p || val === q) {
        count = 1;
      }
      let lN = node.left ? dfs(node.left): {
        count: 0,
        ans: null
      };
      if(lN.count === 2) {
        return {
          count: 2,
          ans: lN.ans
        };
      }
      if(count + lN.count === 2) {
        return {
          count: 2,
          ans: node
        };
      }
      let rN = node.right ? dfs(node.right): {
        count: 0,
        ans: null
      };
      if(rN.count === 2) {
        return {
          count: 2,
          ans: rN.ans
        };
      }
      if(count + rN.count === 2) {
        return {
          count: 2,
          ans: node
        };
      }
      if(count + lN.count === 2) {
        return {
          count: 2,
          ans: node
        };
      }
      if(lN.count + rN.count === 2) {
        return {
          count: 2,
          ans: node
        };
      }
      return {
        count: count + (rN.count || lN.count),
        ans: null
      };
    };
    return dfs(root).ans;
  };
  
  let n6 = new TreeNode(6);
  let n7 = new TreeNode(7);
  let n4 = new TreeNode(4);
  let n2 = new TreeNode(2);
  n2.left = n7;
  n2.right = n4;
  
  let n5 = new TreeNode(5);
  n5.left = n6;
  n5.right = n2;
  
  let n0 = new TreeNode(0);
  let n8 = new TreeNode(8);
  let n1 = new TreeNode(1);
  n1.left = n0;
  n1.right = n8;
  
  let n3 = new TreeNode(3);
  n3.left = n5;
  n3.right = n1;
  console.log(lowestCommonAncestor(n3, 5, 1).val); //3
  // console.log(lowestCommonAncestor(n3, 3, 1).val); //3
  // console.log(lowestCommonAncestor(n3, 5, 4).val); //5
  // console.log(lowestCommonAncestor(n3, 0, 8).val); //1
  // console.log(lowestCommonAncestor(n3, 6, 7).val); //5