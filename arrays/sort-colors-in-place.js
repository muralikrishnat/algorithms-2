var sortColors = function(nums) {
    let len = nums.length;
    let zeroLen = 0, oneLen = 0;
    for(let i = 0;i < len; i++) {
      let num = nums[i];
      if(num === 0) {
        zeroLen += 1
      }
      if(num === 1) {
        oneLen += 1
      }
    }
    for(let i = 0;i < len; i++) {
      if (zeroLen > 0) {
        nums[i] = 0;
        zeroLen -= 1;
      } else if (oneLen > 0) {
        nums[i] = 1;
        oneLen -= 1;
      } else {
        nums[i] = 2;
      }
    }
    console.log(nums);
  };
  
  sortColors([2,0,2,1,1,0]);