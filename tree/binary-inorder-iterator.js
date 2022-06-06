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
   */
   var BSTIterator = function(root) {
    this.index = 0;
    this.len = 0;
  
    var inorder = (node) => {
      let l = [];
      let r = [];
      if(node.left) {
        l = inorder(node.left);
      }
      if(node.right) {
        r = inorder(node.right);
      }
      this.len += 1;
      return [...l, node.val, ...r];
    }
    this.list = inorder(root);
  };
  
  /**
  * @return {number}
  */
  BSTIterator.prototype.next = function() {
    let i = this.index;
    this.index += 1;
    return this.list[i];
  };
  
  /**
  * @return {boolean}
  */
  BSTIterator.prototype.hasNext = function() {
    return this.index < this.len;
  };
  
  /** 
  * Your BSTIterator object will be instantiated and called as such:
  * var obj = new BSTIterator(root)
  * var param_1 = obj.next()
  * var param_2 = obj.hasNext()
  */
  var root = new TreeNode(
    7,
    new TreeNode(3),
    new TreeNode(
      15,
      new TreeNode(9),
      new TreeNode(20)
    )
  );
  var obj = new BSTIterator(root)
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.hasNext());