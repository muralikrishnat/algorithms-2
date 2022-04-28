console.clear();
function HeapNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}


function Heap() {
    let headRoot = null;

    function resetHeap() {
        
    }
    this.printHeap = () => {
        
    }

    this.insert = (number) => {
        
    }
    this.remove = () => {
    }

    
}

var topKFrequent = function(nums, k) {
    let freqArr = new Map();
    let res = [], len = nums.length;
    if (k > len) {
        return [];
    }
    
    for(let i = 0; i < len; i++) {
        let num = nums[i];
        if (!freqArr.has(num)){
            freqArr.set(num, 1);
        } else {
            freqArr.set(num, freqArr.get(num) + 1);
        }
    }
    return Array.from(freqArr).map(x => ({ num: x[0], count: x[1]})).sort((a, b) => { return b.count - a.count; }).map(x => x.num).splice(0, k);
};

topKFrequent([1,1,2,2,2,3], 2);