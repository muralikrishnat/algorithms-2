console.clear();
var kSmallestPairs = function(nums1, nums2, k) {
    let maxSum = Infinity;
    
    let num1Len = nums1.length;
    let num2Len = nums2.length;

    let totalPairs = num1Len * num2Len;

    if (k < totalPairs) {
        console.log();
    }
    
    let res = new Array();
    res.fill(-1);
    let pairs = [];

    console.log('min:maxSum', nums1[0] + nums2[0],  nums1[num1Len - 1] + nums2[num2Len - 1])

    
    
    
    for(let i = 0; i < num1Len; i++) {
        let n1 = nums1[i];
        for(let j = 0; j < num2Len; j++) {
            let n2 = nums2[j];
            console.log('[' + n1 + ',' + n2 + '] => ' + (n1 + n2));
            
        }
    }
    
};

kSmallestPairs([1, 2, 3], [-1, -2, 3], 3)