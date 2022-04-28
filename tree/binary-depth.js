console.clear();
function TreeNode({val, left, right}) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
var loopMax = 50;
var loopIndex = 0;
var maxDepth = function(root) {
  let maxNodeDepth = 1;
  let que = [];
  que.push({
    node: root, 
    depth: 1
  });
  while(que.length > 0 && loopIndex < loopMax) {
    let { node, depth } = que.shift();
    if (node.left) {
      que.push({
        node: node.left, 
        depth: depth + 1
      });
    }
    if (node.right) {
      que.push({
        node: node.right, 
        depth: depth + 1
      });
    }
    if (!node.left && !node.right) {
      maxNodeDepth = Math.max(depth, maxNodeDepth); 
    }
    loopIndex++;
  }
  return maxNodeDepth;
};


//[3,9,20,null,null,15,7]
let root = new TreeNode({
  val: 3, 
  left: new TreeNode({
    val: 9,
    left: null,
    right: null
  }),
  right: new TreeNode({
    val: 20,
    left: new TreeNode({ val: 15}),
    right: new TreeNode({ val: 7})
  })
});

maxDepth(root);

