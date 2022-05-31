/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let len = nums.length;
    k = k % len;
    let s = 0, tmp = new Map();
    while(s < len) {
      let d = (s + k) % len;
      if(tmp.has(s)) {
        tmp.set(d, nums[d]);
        nums[d] = tmp.get(s);  
      } else {
        tmp.set(d, nums[d]);
        nums[d] = nums[s];
      }
      s++;
    }
  };
  
  var input = [1,2,3,4,5,6,7];
  rotate(input, 3);
  console.log(input);
  
  var input2 = [-1,-100,3,99];
  rotate(input2, 2);
  console.log(input2);
  
  /*
  
  [1,2,3,4,5,6,7]
  3
  [-1,-100,3,99]
  2
  
   3, 99, -1, -100
  
   0 => 2
   2 => 0
    7 len
    0 1 2 3 4 5 6
    1 2 3 4 5 6 7
    5 6 7 1 2 3 4
  
    0 => 3
    1 => 4
    2 => 5
    3 => 6 
    4 => 0
    5 => 1
    6 => 2
    
    
    
    
  
  */