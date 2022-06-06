/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let len = nums.length;
    let res = [];
    let p = 1, n = 1;
    for(let i = 0, e = len - 1; i < len; i++, e--) {
      let num = nums[i];
      let pre = nums[i-1] !== undefined ? nums[i-1] : 1;
      let post = nums[e + 1] !== undefined ? nums[e+1] : 1;
      p = pre * p;
      n = post * n;
      if(i >= e) {
        if(i === e) {
          res[i] = p * n;
        } else {
          res[i] = res[i] * p;
          res[e] = res[e] * n;
        }
      } else {
        res[i] = p;
        res[e] = n;
      }
    }
    return res;
  };
  
  
  // console.log(productExceptSelf([2,3,4,5]));
  console.log(productExceptSelf([1,2,3,4,5]));