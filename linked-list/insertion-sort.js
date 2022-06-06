function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var insertionSortList = function (head) {

    let dummyRoot = new ListNode();
    let count = 0;
    var insert = (val) => {
        if (!dummyRoot.next) {
            dummyRoot.next = new ListNode(val);
            count = 1;
        } else {
            let cur = dummyRoot.next;
            let prev = dummyRoot;
            let i = 0;
            while (cur && i < count) {
                let n1 = cur.val;
                let next = cur.next
                if (val < n1) {
                    prev.next = new ListNode(val, cur);
                    count += 1;
                    break;
                } else {
                    if (cur.next) {
                        let n2 = cur.next.val;
                        if (val >= n1 && val <= n2) {
                            let n = cur.next;
                            cur.next = new ListNode(val, n);
                            count += 1;
                            break;
                        }
                    } else {
                        if (val > n1) {
                            cur.next = new ListNode(val);
                            count += 1;
                            break;
                        } else {
                            cur.next = null;
                            prev.next = new ListNode(val, cur);
                            count += 1;
                            break;
                        }
                    }
                }
                cur = next;
                prev = cur;
                i++;
            }
        }
    };
    let cur = head;
    while (cur) {
        insert(cur.val);
        cur = cur.next;
    }
    return dummyRoot.next;
};

var root = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
// var out = insertionSortList(root);
var root2 = new ListNode(4);
var out = insertionSortList(root2);

var printList = (root) => {
    let cur = root;
    let path = [];
    while (cur) {
        path.push(cur.val);
        cur = cur.next;
    }
    console.log(path.join(' => '));
};
printList(out);