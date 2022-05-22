var removeDuplicates = function(nums) {
    let len = nums.length;
    let lCount = 1, lD = null, swapcount = 0;
    let lastIndex = len - 1;
    for(let i = 0; i < len; i++) {
      let num = nums[i];
      if (lD === num) {
        lCount += 1;
        if (lCount > 2) {
          nums[i] = null;
          lastIndex = i;
          swapcount += 1;
        }
      } else {
        lD = num;
        lCount = 1;
      }
    }
    var swapNum = (index) => {
      if (index + 1 < len) {
        if (nums[index + 1] !== null) {
          let t = nums[index];
          nums[index] =nums[index + 1];
          nums[index + 1] = t;
          swapNum(index + 1);
        }
      }
    }
    for(let i = 0;i < swapcount; i++) {
      for(let end = lastIndex; end >= 0; end--) {
        let num = nums[end];
        if (num === null) {
          swapNum(end);
          lastIndex = end;
        }
      }
    }
    return len - swapcount;
  };
  console.assert(removeDuplicates([1,1,1,1,2,2,3]),5);