/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
    let res = [];
  var getTreeList = (arr) => {
    let list = [], len = arr.length;
    if (len === 0) {
      return [new TreeNode(null)];
    }
    if (len === 1) {
      return [new TreeNode(arr[0])];
    }
    if (len === 2) {
      let n1 = new TreeNode(arr[0], null,new TreeNode(arr[1]));
      let n2 = new TreeNode(arr[1],new TreeNode(arr[0]), null);
      return [n1, n2];
    }
    for(let i = 0; i < len; i++) {
      let lT = getTreeList(arr.slice(0,i));
      let rT = getTreeList(arr.slice(i + 1));
      for(let l of lT) {
        for(let r of rT) {
          let root = new TreeNode(arr[i]);
          if (l.val !== null) {
            root.left = l;
          }
          if (r.val !== null) {
            root.right = r;
          }
          list.push(root);
        } 
      }
    }
    return list;
  };
  if (n === 1) {
    return getTreeList([1]);
  }
  if (n === 2) {
    return getTreeList([1, 2]);
  }
  let arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for(let i = 0; i < n; i++) {
    let lT = getTreeList(arr.slice(0,i));
    let rT = getTreeList(arr.slice(i + 1));
    for(let l of lT) {
      for(let r of rT) {
        let root = new TreeNode(arr[i]);
        if (l.val !== null) {
          root.left = l;
        }
        if (r.val !== null) {
          root.right = r;
        }
        res.push(root);
      } 
    }
  }
  return res;
};