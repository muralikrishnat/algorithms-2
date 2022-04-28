console.clear();
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}
var pathSum = function(root, targetSum) {
    let res = [];
    var dfs = (node, parentSum, targetSum, path = [], result = []) => {
        if (node.val + parentSum === targetSum) {
            path.push(node.val);
            res.push(path);
            return;
        }
        if (node.val + parentSum > targetSum) {
            return;
        }
        if (node.left) {
            let newArr = [...path, node.val];
            dfs(node.left, parentSum + node.val, targetSum, newArr, result);
        }
        if(node.right) {
            let newArr = [...path, node.val];
            dfs(node.right, parentSum + node.val, targetSum, newArr, result);
        }
    }
    dfs(root, 0, targetSum, [], res);
    return res;
};

var root = new TreeNode(
    5,
    new TreeNode(
        4,
        new TreeNode(
            11,
            new TreeNode(
                7
            ),
            new TreeNode(2)
        )
    ),
    new TreeNode(
        8,
        new TreeNode(
            13
        ),
        new TreeNode(
            4,
            new TreeNode(5),
            new TreeNode(1)
        )
    )
);
root = new TreeNode(
    -2,
    null,
    new TreeNode(
        -3
    )
);
console.log(pathSum(root, -5));


function getTarget(arr, target) {
  let len = arr.length;
  let res = [];

  let loopIndex = 0, loopLimit = 10;
  var dfs = (start, cur = [], total) => {
    console.count('dfs');
    if (total > target) {
      return;
    }
    if (total === target) {
      res.push(cur);
      return;
    }
    if(start < len) {
      let num = arr[start];
      dfs(start, [...cur, num], total + num);
      dfs(start + 1, cur, total);
    }
  }
  dfs(0, [], 0)
  return res;
}

console.log(getTarget([2, 3, 6, 7], 7));