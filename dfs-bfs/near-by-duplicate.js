var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let len = nums.length;
    let start = 0, size = 1, diff = null;
    let res = false;
    while(start < len - 1) {
      let e = start + size + 1;
      let diff = Math.abs(nums[start] - nums[e-1]);
      if(diff <= t && Math.abs(start - (e - 1)) <= k) {
        res = true;
        break;
      }
      if(size < k && e < len) {
        size++;
      } else {
        size = 1;
        start++;
      }
    }
    return res;
  };
  
  // console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));
  console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));
  // console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));