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
   * @param {number} k
   * @return {number}
   */
  var kthSmallest = function(root, k) {
    let res = null;
    var dfs = (node) => {
      if(!node) return { list: []};
      let list = [];
      let ln = node.left ? dfs(node.left) : {list: []};
      list = [...ln.list];
      let cv = node.val;
      list.push(cv);
      if(list[k-1]) {
        return {
          list: list,
          val: list[k-1]
        }
      }
      let rn = node.right ? dfs(node.right) : {list: []};
      list = [...list, ...rn.list];
      if(list[k-1]) {
        return {
          list: list,
          val: list[k-1]
        }
      }
      return {
        list: list,
        val: null
      };
    }
    return dfs(root).val;
  };
  
  var root = new TreeNode(
    5,
    new TreeNode(
      3,
      new TreeNode(
        2,
        new TreeNode(1)
      ),
      new TreeNode(4)
    ),
    new TreeNode(6)
  );
  console.log(kthSmallest(root, 3));