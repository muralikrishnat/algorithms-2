var canJump = function(nums) {
    let isValid = false;
    let len = nums.length, goal = null;
    for(let i = len -1; i >= 0; i--) {
      let maxJump = nums[i];
      if (i === len - 1) {
        goal = i;
      } else {
        if (i + maxJump >= goal) {
          goal = i;
        }
      }
    }
    return goal === 0;
  };
  
  console.log(canJump([2,1,1,1,4]));
  // console.log(canJump([1,2,2,0,1]));
  
  
  
  
  