var jump = function(nums) {
    let res = 0, len = nums.length;
    if(len === 1) return 0;
    let que = [], indexCovered = 0;
    que.push({
      index: 0,
      jump: 1
    });
    let loopIndex = 0, loopLimit = 100;
    while(que.length > 0 && loopIndex < loopLimit) {
      let { index, jump } = que.shift();
      let canJump = nums[index];
      if (index + canJump >= len - 1) {
        res = jump;
        break;
      }
      if (canJump >= 0) {
        for(let i = 1; i <= canJump; i++) {
          if (index + i > indexCovered) {
            que.push({
              index: index + i,
              jump: jump + 1
            });  
            indexCovered = index + i;
          }
        }
      }
      loopIndex++;
    }
    console.log('while count', loopIndex);
    return res;
  };
  
  // console.log(jump([2,8,0,0,0,8,0,0,0,2,0,1,1,2]));
  // console.log(jump([2,2,0,0,0,8,0,0,0,2,0,1,1,2]));
  // console.log('res', jump([1, 3, 1, 1, 1, 1, 1]));
  console.log('res', jump([6,2,6,1,7,9,3,5,3,7,2,8,9,4,7,7,2,2,8,4,6,6,1,3]));