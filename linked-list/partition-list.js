function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var partition = function (head, x) {
  let cur = head;
  let a1 = [], a2 = [];
  while (cur) {
    let val = cur.val;
    if (val < x) {
      a1.push(val);
    }
    if (val >= x) {
      a2.push(val);
    }
    cur = cur.next;
  }
  let nArr = [...a1, ...a2], nLen = nArr.length;
  let root = null, prev = null;
  for (let i = 0; i < nLen; i++) {
    let num = nArr[i];
    let node = new ListNode(num);
    if (!root) {
      root = node;
    }
    if (prev) {
      prev.next = node;
    }
    prev = node;
  }
  return root;
};

var printTree = (root) => {
  let nodes = [], head = root;
  while (head) {
    nodes.push(head.val);
    head = head.next;
  }
  console.log(nodes.join(' => '));
}
var compareTree = (root1, root2) => {
  let head = root1, head2 = root2;
  let res = true;
  while (head) {
    if (head.val !== head2.val) {
      res = false;
      break;
    }
    head = head.next;
    head2 = head2.next;
  }
  return res;
};
var createTree = (list) => {
  let root = null, prev = null;
  for (let i = 0; i < list.length; i++) {
    let num = list[i];
    let node = new ListNode(num);
    if (!root) {
      root = node;
    }
    if (prev) {
      prev.next = node;
    }
    prev = node;
  }
};
[
  {
    input: [[1, 4, 3, 2, 5, 2], 3],
    out: [1, 2, 2, 4, 3, 5]
  }
].forEach(x => {
  let [list, k] = x.input;
  let root = null, prev = null;
  for (let i = 0; i < list.length; i++) {
    let num = list[i];
    let node = new ListNode(num);
    if (!root) {
      root = node;
    }
    if (prev) {
      prev.next = node;
    }
    prev = node;
  }
  printTree(root);
  let out = partition(root, k);
  printTree(out);
});

