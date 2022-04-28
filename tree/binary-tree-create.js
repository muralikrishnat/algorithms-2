console.clear();
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
var buildTree = function(preorder, inorder) {
  let que = [], rootNode = null, curNode = null;
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }
  que.push({
    p: preorder,
    i: inorder
  });
  while(que.length > 0) {
    let { p, i,nodeToAttach, dir  } = que.shift();
    let rootVal = p[0];
    let rightI = i.splice(i.indexOf(rootVal));
    rightI.shift();
    p.shift();
    let leftI = i;
    let rightP = p.slice(leftI.length);
    let leftP = p.slice(0, leftI.length);

    let newNode = new TreeNode(rootVal);
    if (leftI.length === 1) {
      newNode.left = new TreeNode(leftI[0]);
    }
    if (rightI.length === 1) {
      newNode.right = new TreeNode(rightI[0]);
    }
    if(rightI.length > 1) {
      que.push({
        p: rightP,
        i: rightI,
        nodeToAttach: newNode,
        dir: 'R'
      });
    }
    if(leftI.length > 1) {
      que.push({
        p: leftP,
        i: leftI,
        nodeToAttach: newNode,
        dir: 'L'
      });
    }
    if (!rootNode) {
      rootNode = newNode;
    } else {
      if (dir === 'R') {
        nodeToAttach.right = newNode;
      } else {
        nodeToAttach.left = newNode;
      }
    }
  }
  return rootNode;
};
// console.log(buildTree([1,2],[2, 1]));
// console.log(buildTree([1,2],[1, 2]));
// console.log(buildTree([1,2, 3],[1, 2, 3]));
console.log(buildTree([1,2,4,3],[2,4,1, 3]));
// console.log(buildTree([1, 2, 4, 5, 3, 6, 7],[4,2,5,1,6,3,7]));