/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let len = nums.length;
    let res = Infinity;
    let p1 = 0, p2 = 0, sum = 0;
    while(p2 < len) {
      let num = nums[p2];
      sum += num;
      while(sum >= target) {
        res = Math.min(res, p2 - p1 + 1);
        sum -= nums[p1];
        p1++;
      }
      p2++;
    }
    return res === Infinity ? 0 : res;
  };
  // minSubArrayLen(7, [2,3,1,2,4,3]);
  // minSubArrayLen(4, [1,4,4]);
  minSubArrayLen(11, [1,1,1,1,1,1,1]);
  
  /*
    2 2
    2 3 5
    2 3 1 6
    2 3 1 2 8, 4
    3 1 2 6
    3 1 2 4 10, 4
    1 2 4 7, 3
    2 4 6
    2 4 3 9, 3
    4 3 7, 2
  */
  
  