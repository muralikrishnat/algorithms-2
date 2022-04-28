console.clear();
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var root2 = new TreeNode(10);
root2.left = new TreeNode(8);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(4);
root2.left.left.right = new TreeNode(5);
root2.left.left.right.right = new TreeNode(6);
root2.right.left = new TreeNode(14);
root2.right.right = new TreeNode(16);




var s = "PAYPALISHIRING", numRows = 4;
var convert = function(s, numRows) {
  let pointer = 0, len = s.length;
  let dir = true;
  let cols = [];
  let i = 0, j = 0;
  while(pointer < len)  {
    console.log('i:j', i, j, s[pointer]);
    if (!cols[j]) {
      cols[j] = [];
    }
    cols[j].push(s[pointer]);
    if (dir){
      j += 1;
      if (j === numRows - 1) {
        dir = !dir;
      }
    } else {
      i += 1;
      j -= 1;
      if (j === 0) {
        dir = !dir;
      }
    }
    pointer++;
  }
  return cols.reduce((a, b) => { return a + b.join(''); }, '');
};


convert(s, numRows);