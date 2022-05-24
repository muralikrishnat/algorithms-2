function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  var sortedListToBST = function(head) {
    let len = 0, arr = [];
    let cur = head;
    while(cur) {
      arr.push(cur.val);
      len++;
      cur = cur.next;
    }
    var getTree = (arr) => {
      let len = arr.length;
      if(len == 0) return null;
      if(len === 1) return new TreeNode(arr[0]);
      if(len === 2) {
        return new TreeNode(arr[1], new TreeNode(arr[0]));
      }
      if(len === 3) {
        return new TreeNode(arr[1], new TreeNode(arr[0]), new TreeNode(arr[2]));
      }
      let mi = Math.floor(len/2);
      let node = new TreeNode(arr[mi]);
      node.left = getTree(arr.slice(0, mi));
      node.right = getTree(arr.slice(mi + 1));
      return node;
    };
    return getTree(arr);
  };
  
  var createList = (arr) => {
    let len = arr.length;
    let root = null, prev = null;
    for(let i = 0; i < len; i++) {
      let num = arr[i];
      let node = new ListNode(num);
      if(!prev) {
        root = node;
      } else {
        prev.next = node;
      }
      prev = node;
    }
    return root;
  }
  let arr1 = [1,2,3,4];
  let arr2 = [1,2,3,4,5,6,7];
  let root1 = createList(arr2);
  console.log(sortedListToBST(root1));
  
  
  