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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if(!root) return root;
    var getSub = (node) => {
      if(!node) return [null,null];
      if (!node.left && !node.right) {
        return [node, node];
      }
      if(node.left && !node.right) {
        let [lp,lc] = getSub(node.left);
        node.right = lp;
        node.left = null;
        return [node, lc]
      }
      if(node.right && !node.left) {
        let [rp,rc] = getSub(node.right);
        node.right = rp;
        node.left = null;
        return [node, rc]
      }
      if(node.right && node.left) {
        let [lp,lc] = getSub(node.left);
        let [rp,rc] = getSub(node.right);
        lc.right = rp;
        node.right = lp;
        node.left = null;
        return [node, rc];
      }
    }
    var swapNode = (node) => {
      let [lp,lc] = getSub(node.left);
      let [rp,rc] = getSub(node.right);
      if (node.left && node.right) {
        lc.right = rp;
        node.right = lp;
        node.left = null;
      } else if(lp && !rp) {
        node.right = lp;
        node.left = null;
      } else if (rp && !lp) {
        node.right = rp;
        node.left = null;
      }
    };
    swapNode(root);
    return root;
  };