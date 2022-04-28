function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  /*
    5
      1
  
      4
        3
        6
  
  DFS
  BFS
  
  */
  
  var isValidBST = function(root) {
    let que = [], res = true;
    que.push({
      node: root,
      parentVal: null
    });
    while(que.length > 0) {
      let { node, parentVal, dir } = que.shift();
      if (node.left) {
        console.log('left: dir :' + dir, parentVal, node.left.val, node.val);
        if (node.left.val < node.val) {
          que.push({
            node: node.left,
            parentVal: node.val,
            dir: 0
          });
        } else {
          res = false;
          break;
        }
      }
      if (node.right) {
        console.log('right: dir :' + dir, parentVal, node.right.val, node.val);
        if (node.right.val > node.val) {
          que.push({
            node: node.right,
            parentVal: node.val,
            dir: 1
          });
        } else {
          res = false;
          break;
        }
      }
    }
    return res;
  };
  
  var root = new TreeNode(
    5, 
    new TreeNode(
      4,
      null,
      new TreeNode(7)
    ),
    new TreeNode(
      6, 
      new TreeNode(3),
      new TreeNode(7)
    )
  );
  
  console.log(isValidBST(root));
  
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
   * @return {boolean}
   */
  
  var isValidBST = function(root) {
    let que = [], res = true;
    que.push({
      node: root,
      parentVal: null,
      dir: null,
      lowerLimit: -Infinity,
      upperLimit: Infinity
    });
    while(que.length > 0) {
      let { node, lowerLimit, upperLimit} = que.shift();
      if (!(lowerLimit < node.val && node.val < upperLimit)) {
        res = false;
        break;
      }
      if (node.left) {
        que.push({
          node: node.left,
          lowerLimit,
          upperLimit: node.val
        });
      }
      if (node.right) {
        que.push({
          node: node.right,
          lowerLimit: node.val,
          upperLimit: upperLimit
        });
      }
    }
    return res;
  };



  console.clear();
/*
[1, 2, 3, 4,5, 6, 7, 8, 9, 10]
[1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11]
[1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12]
[1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12, 13]


[6,3,9,2,5,8,10,1,null,4,null,7]
[6,3,9,2,5,8,11,1,null,4,null,7,null,10]
[7,4,10,2,6,9,12,1,3,5,null,8,null,11]
[7,4,11,2,6,9,13,1,3,5,null,8,10,12]
*/



var splitArr = (arr) => {
    let len = arr.length;
    let centerIndex = len % 2 === 0 ? len / 2 : Math.floor(len / 2);
    let leftArr = arr.splice(0, centerIndex);
    let centerElem = arr.shift();
    let rightArr = arr;
    console.log(leftArr, centerElem, rightArr);
}

splitArr([1, 2]);
splitArr([1, 2, 3]);
splitArr([1, 2, 3, 4]);
splitArr([1, 2, 3, 4, 5]);
splitArr([1, 2, 3, 4, 5, 6]);



var searchMatrix = function(matrix, target) {
    if(!matrix) return false;
    let left = 0, end = matrix.length - 1; // 3
    let colLen = matrix[0].length;
    // 7, 20, 60, 260
    let loopIndex =0, loopLimit = 10;
    while(left < end && loopIndex < loopLimit) {
      let leftVal = matrix[left][colLen - 1]; // 7
      let mid = Math.floor((end - left) / 2) + left;
      let midVal = matrix[mid][colLen - 1];
      if (end - left === 1) {
        break;
      }
      if (target > mid) {
        left = mid;
      }
      if (target < mid) {
        end = mid;
      }
      loopIndex++;
    }
    console.log(left, end);
    let res = false;
    for(let i = 0; i < colLen - 1; i++) {
      if (matrix[left][i] === target) {
        res = true;
        break;
      }
    }
    return res;
  };
  
  
  
  let data = [[1,3,5,7],[10,11,16,20],[23,30,34,60],[80,90,134,260]];
  console.log(searchMatrix(data, 300));