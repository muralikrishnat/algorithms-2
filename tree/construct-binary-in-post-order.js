function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  var buildTree = function(inorder, postorder) {
    var getTree = (inorder, postorder) => {
      let len = postorder.length;
      let t = postorder[len - 1], tI = -1;
      for(let i = len - 1; i >= 0; i--) {
        let num = inorder[i];
        if(num === t) {
          tI = i;
          break;
        }
      }
      let leftInOrder = inorder.slice(0, tI);
      let rightInOrder = inorder.slice(tI + 1);
      let lLen = leftInOrder.length, rLen = rightInOrder.length;
      let leftPostOrder = postorder.slice(0, lLen);
      let rightPostOrder = postorder.slice(lLen, -1);
      let node = new TreeNode(t);
      if (lLen > 0) {
        node.left = getTree(leftInOrder, leftPostOrder);
      }
      if(rLen > 0) {
        node.right = getTree(rightInOrder, rightPostOrder);
      }
      return node;
    };
    return getTree(inorder, postorder);
  };
  
  let root1 = buildTree([9,3,15,20,7], [9,15,7,20,3]);
  let in2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  let post2 = [1,3,2,5,7,6,4,9,11,10,13,15,14,12,8];
  // console.log(buildTree(in2, post2));
  
  var levelOrderBottom = function(root) {
    let res = [], que = [];
    let levelArr = [], curLevel = 0;
    que.push({
      node: root,
      level: 0
    });
    while(que.length > 0) {
      let { node, level } = que.shift();
      console.log(level, node.val, curLevel);
      if (level === curLevel) {
        levelArr.push(node.val);
      } else {
        res.unshift(levelArr);
        levelArr = [];
        levelArr.push(node.val);
        curLevel = level;
      }
      if(node.left) {
        que.push({
          node: node.left,
          level: level + 1
        });
      }
      if(node.right) {
        que.push({
          node: node.right,
          level: level + 1
        });
      }
    }
    res.unshift(levelArr);
    return res;
  };
  
  console.log(levelOrderBottom(root1))
  