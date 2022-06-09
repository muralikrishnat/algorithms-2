/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    var Node = function(v) {
      this.val = v;
      this.nodes = [];
    };
    let len = nums.length;
    let trees = [];
    var updateTree = (node, num, pNode, count = 0) => {
      if(node.val === num) {
        return;
      }
      if(node.val < num) {
        if (node.nodes.length === 0) {
          node.nodes.push(new Node(num));
          return;
        }
        let isAdded = false, maxD = 0;
        node.nodes.forEach(x => {
          if(x.val !== num) {
            updateTree(x, num, node)
          }
        });
      } else {
        if(pNode) {
          pNode.nodes.push(new Node(num));
        }
      }
    };
    let res = -Infinity;
    var insert = (num) => {
      if(trees.length === 0) {
        trees.push(new Node(num));
        return;
      }
      let foundTree = false;
      trees.forEach(x => {
        if(x.val === num) {
          res = Math.max(res, 1);
        } else {
          if(x.val < num) {
            foundTree = true;
            updateTree(x, num, null)
          }
        }
      });
      if (!foundTree) {
        trees.push(new Node(num));
      }
    }
    for(let i = 0; i < len; i++) {
      let num = nums[i];
      insert(num);
    }
    var printTree = (trees) => {
      var countLevel = (node, level) => {
        res = Math.max(res, level + 1);
        node.nodes.forEach(x => {
          countLevel(x, level + 1);
        });
      };
      for(let i =0; i < trees.length; i++) {
        countLevel(trees[i], 0);
      }
    }
    printTree(trees);
    return res;
  };