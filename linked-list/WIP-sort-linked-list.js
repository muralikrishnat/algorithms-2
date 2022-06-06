/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    var sort = (root) => {
    if(!root) return [null, null];
    if (!root.next) return [root, root];
    let l = new ListNode(null);
    let r = new ListNode(null);
    let cur = root.next;
    let pivot = root;
    while(cur) {
      let n = cur.next;
      if (cur.val <= pivot.val) {
        let ln = l.next;
        l.next = cur;
        cur.next = ln;
      } else {
        let rn = r.next;
        r.next = cur;
        cur.next = rn;
      }
      cur = n;
    }
    pivot.next = null;
    let [lp, lc] = sort(l.next);
    let [rp, rc] = sort(r.next);
    if(lp) {
      if (lc) {
        lc.next = pivot;
      } else {
        lp.next = pivot;
      }
      if (rp) {
        pivot.next = rp;
        return [lp, rc]
      }
      return [lp, pivot];
    }
    pivot.next = rp;
    return [pivot, rc];
  }
  var dfs = (root) => {
    if(!root) return root;
    if(!root.next) return root;
    let l = new ListNode(null);
    let r = new ListNode(null);
    let cur = root.next;
    let pivot = root;
    while(cur) {
      let n = cur.next;
      if (cur.val <= pivot.val) {
        let ln = l.next;
        l.next = cur;
        cur.next = ln;
      } else {
        let rn = r.next;
        r.next = cur;
        cur.next = rn;
      }
      cur = n;
    }
    pivot.next = null;
    let [lp, lc] = sort(l.next);
    let [rp, rc] = sort(r.next);
    pivot.next = rp;
    if(lp) {
      if(lc) {
        lc.next = pivot;
      } else {
        lp.next = pivot;
      }
      return lp;
    }
    return pivot;
  };
  return dfs(head);
};