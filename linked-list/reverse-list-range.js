/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if (!head) return head;
    if (left === right) return head;
    let cur = head, index = 1;
    
    let prev = null, l1 = null;
    let p1 = null, p2 = null;
    let dummy = new ListNode();
    dummy.next = head;
    while(cur) {
      let next = cur.next;
      if(left === 1 && index === 1) {
        l1 = dummy;
        p1 = cur;
        p2 = cur;
        p1.next = null;
      }
      if (prev) {
        if (index === left) {
          l1 = prev;
          p1 = cur;
          p2 = cur;
          p1.next = null;
        }
        if (index > left && index < right) {
          cur.next = p1;
          p1 = cur;
        }
  
        if (index === right) {
          if(next) {
            cur.next = p1;
            l1.next = cur;
            p2.next = next;
          } else {
            cur.next = p1;
            l1.next = cur;
          }
        }
      }
      prev = cur;
      cur = next;
      index++;
    }
    return dummy.next;  
  };