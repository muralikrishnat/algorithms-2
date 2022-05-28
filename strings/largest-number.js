/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    var compareTwo = (n1, n2) => {
      let res = 0;
      if((n1 + '' + n2) > (n2 + '' + n1)) {
        return -1;
      }
      return 1;
    }
    var sortL = (nums) => {
      let len = nums.length;
      if(len === 0 || len === 1) return nums;
      if(len === 2) {
        let n1 = nums[0];
        let n2 = nums[1];
        if(compareTwo(n1, n2) >= 0) {
          return [n2, n1];
        } else {
          return [n1, n2];
        }
      }
      let pivot = nums[0];
      let l = [], r = [];
      for(let i = 1; i < len; i++) {
        let n1 = nums[i];
        if(compareTwo(n1, pivot) >= 0) {
          r.push(n1);
        } else {
          l.push(n1);
        }
      }
      return [...sortL(l), pivot, ...sortL(r)]
    };
    let res = sortL(nums).join('');
    return (res - 0) === nums[0] ? nums[0] + '' : res;
  };